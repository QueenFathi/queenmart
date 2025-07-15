import { sql } from '@vercel/postgres';
import {
  Product,
} from './types'
import { Pool } from "pg";
const pool = new Pool({ connectionString: process.env.DATABASE_URL });


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

export async function fetchFilteredProducts({
  category,
  price,
  colors,
  sizes,
  sortby,
  filterbydiscount,
  page = 1,
  limit = 2,
}: {
  category?: string;
  price?: string;
  colors?: string;
  sizes?: string;
  sortby?: string;
  filterbydiscount?: string; 
  page?: number;
  limit?: number;
}) {
  let query = "SELECT * FROM products WHERE true";
  let countquery = "SELECT COUNT(*) FROM products WHERE true";

  if (category) {
    query += ` AND categoryname ILIKE '${category}'`;
    countquery += ` AND categoryname ILIKE '${category}'`;
  }

  if (price) {
    const [min, max] = price.split("-").map(Number);
    query += ` AND (price - (price * (discount / 100))) BETWEEN ${min} AND ${max}`;
    countquery += ` AND (price - (price * (discount / 100))) BETWEEN ${min} AND ${max}`;
  }

  if (colors) {
    const colorString = colors.split(',').map(c => `'${c.trim()}'`).join(', ');
    query += ` AND EXISTS (
      SELECT 1
      FROM jsonb_array_elements(colors) AS color
      WHERE color->>'name' IN (${colorString}))`;
      countquery += ` AND EXISTS (
      SELECT 1
      FROM jsonb_array_elements(colors) AS color
      WHERE color->>'name' IN (${colorString}))`;
  }

  if (sizes) {
    const sizeString = sizes.split(',').map(c => `'${c.trim()}'`).join(', ');
    query += ` AND EXISTS (
      SELECT 1
      FROM jsonb_array_elements(sizes) AS size
      WHERE size->>'name' IN (${sizeString}))`;
      countquery += ` AND EXISTS (
      SELECT 1
      FROM jsonb_array_elements(sizes) AS size
      WHERE size->>'name' IN (${sizeString}))`;
  }
  if (filterbydiscount) {
    query += ` AND discount > 0`;
    countquery += ` AND discount > 0`;
  }

  if (sortby === "price_asc") {
    query += ` ORDER BY (price - (price * (discount / 100))) ASC`;
  } else if (sortby === "price_desc") {
    query += ` ORDER BY (price - (price * (discount / 100))) DESC`;
  } else if (sortby === "best_ratings") {
    query += ` ORDER BY rating DESC`;
  } else if (sortby === "popularity") {
    query += ` ORDER BY reviewcount DESC`;
  }

  const offset = (page - 1) * limit;

  const result = await pool.query(query+` LIMIT ${limit} OFFSET ${offset}`);
  const countResult = await pool.query(countquery);
  const totalCount = parseInt(countResult.rows[0].count, 10)
  return {
    products: result.rows,
    total: totalCount,
    page,
    totalPages: Math.ceil(totalCount / limit),
  };

}



