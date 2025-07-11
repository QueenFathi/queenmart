import { sql } from '@vercel/postgres';
import {
  Product,
} from './types'
export async function getAllProducts() {
  try {
    const data = await sql<Product>`SELECT * FROM products`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch product data.');
  }
}

export async function getProductsById(id: string) {
  try {
    const data = await sql<Product>`
      SELECT * FROM products
      WHERE id = ${id};
    `;
    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch product.');
  }
}

export async function fetchSearchedProducts(
  query: string,
) {
  try {
    const data = await sql<Product>`
      SELECT
        *
      FROM products
      WHERE
        name ILIKE ${`%${query}%`}
        LIMIT 8
    `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch searched products.');
  }
}


