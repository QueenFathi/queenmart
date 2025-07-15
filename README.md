# QUEENMART 🛍️

Frontend e-commerce website

Live Demo: [queenmart.vercel.app](https://queenmart.vercel.app)

## 🚀 Features
- 🔍 Product listings with search and filters
- 🛒 Shopping cart with quantity management
- 🔐 User authentication & secure checkout
- 📱 Responsive design — mobile-friendly across devices
- ⚡ Fast performance (SSR / SSG via Vercel)

## 🧱 Tech Stack

| Category             | Tools & Libraries                          |
|----------------------|--------------------------------------------|
| Framework            | [Next.js](https://nextjs.org), [React](https://react.dev/)       |
| Styling              | [Tailwind CSS](https://tailwindcss.com)    |
| Serverless Database  | Neon (PostgreSQL)                          |
| Deployment           | Vercel(https://vercel.com)                 |


### Homepage
<img width="1886" height="860" alt="image" src="https://github.com/user-attachments/assets/3c03f876-a51a-4486-ad88-2b0bcf314549" />

### Products page
<img width="1887" height="878" alt="image" src="https://github.com/user-attachments/assets/57dab4b8-8439-47c3-87d7-a886f41f4da3" />

## Environment Variables
To run this project, you will need to add the following environment variables to your .env file

```bash
# Recommended for most uses
DATABASE_URL=postgres://neondb_owner:npg_yNfYgIK12ZzO@ep-red-sun-a4wkdl73-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require

# For uses requiring a connection without pgbouncer
DATABASE_URL_UNPOOLED=postgresql://neondb_owner:npg_yNfYgIK12ZzO@ep-red-sun-a4wkdl73.us-east-1.aws.neon.tech/neondb?sslmode=require

# Parameters for constructing your own connection string
PGHOST=ep-red-sun-a4wkdl73-pooler.us-east-1.aws.neon.tech
PGHOST_UNPOOLED=ep-red-sun-a4wkdl73.us-east-1.aws.neon.tech
PGUSER=neondb_owner
PGDATABASE=neondb
PGPASSWORD=npg_yNfYgIK12ZzO

# Parameters for Vercel Postgres Templates
POSTGRES_URL=postgres://neondb_owner:npg_yNfYgIK12ZzO@ep-red-sun-a4wkdl73-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require
POSTGRES_URL_NON_POOLING=postgres://neondb_owner:npg_yNfYgIK12ZzO@ep-red-sun-a4wkdl73.us-east-1.aws.neon.tech/neondb?sslmode=require
POSTGRES_USER=neondb_owner
POSTGRES_HOST=ep-red-sun-a4wkdl73-pooler.us-east-1.aws.neon.tech
POSTGRES_PASSWORD=npg_yNfYgIK12ZzO
POSTGRES_DATABASE=neondb
POSTGRES_URL_NO_SSL=postgres://neondb_owner:npg_yNfYgIK12ZzO@ep-red-sun-a4wkdl73-pooler.us-east-1.aws.neon.tech/neondb
POSTGRES_PRISMA_URL=postgres://neondb_owner:npg_yNfYgIK12ZzO@ep-red-sun-a4wkdl73-pooler.us-east-1.aws.neon.tech/neondb?connect_timeout=15&sslmode=require

# Neon Auth environment variables for Next.js
NEXT_PUBLIC_STACK_PROJECT_ID=f9189020-8403-4878-a0ed-57669f835fa5
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=pck_qgk5rcakmn1nxhyt3f5kpyk4wrdf4etjmxbe56k56vw5g
STACK_SECRET_SERVER_KEY=ssk_e4sqjg8vnxf4a1wh9aynzjz6gnyw28cqehz8zx8e0540r
```

## Installation & Run Locally

Clone the project:
```bash
git clone https://github.com/QueenFathi/queenmart.git

```

Go to the project directory
```bash
cd queenmart
```

Install dependencies
```bash
pnpm install
```

Start the server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
