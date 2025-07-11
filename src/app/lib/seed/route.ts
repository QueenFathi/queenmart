import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { users, products } from './placeholder_data';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedProducts() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      imageSrc TEXT,
      price INTEGER NOT NULL,
      discount INTEGER,
      qty INTEGER,
      rating DECIMAL(2, 1),
      reviewCount INTEGER,
      description TEXT,
      detail TEXT,
      categoryId INTEGER,
      categoryName TEXT,
      stock INTEGER,
      colors JSONB,
      sizes JSONB
    );
  `;

  const insertedProducts = await Promise.all(
    products.map(async (product) => {
      return client.sql`
        INSERT INTO products (
          id, name, imageSrc, price, discount, qty, rating, reviewCount,
          description, detail, categoryId, categoryName, stock, colors, sizes
        ) VALUES (
          ${product.id},
          ${product.name},
          ${product.imageSrc},
          ${product.price},
          ${product.discount},
          ${product.qty ?? null},
          ${product.rating},
          ${product.reviewCount},
          ${product.description},
          ${product.detail},
          ${product.categoryId},
          ${product.categoryName},
          ${product.stock},
          ${JSON.stringify(product.colors)},
          ${JSON.stringify(product.sizes)}
        )
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedProducts;
}



export async function GET() {
  // return Response.json({
  //   message:
  //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
  // });
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedProducts();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error: any) {
    await client.sql`ROLLBACK`;
    console.error("Seeding error:", error); // Show full error in console
    return Response.json(
      {
        error: "Seeding failed",
        detail: error.message || JSON.stringify(error),
      },
      { status: 500 }
    );
  }
}
