
# Pokémon Application

A Pokémon application that displays detailed Pokémon information, including their stats, abilities, and types. The app also shows similar Pokémon based on their types.

---

## i. Tech Stack

- **Frontend:**
  - React with Next.js
  - Tailwind CSS for styling
- **Backend:**
  - Node.js
- **Database:**
  - Prisma ORM 
- **Other Tools:**
  - TypeScript
  - Axios
  - VS Code for development
  - npm/Yarn for package management

---

## ii. Pre-requisites (for the app to run locally)

Ensure the following are installed on your system:

1. **Node.js** (v16 or higher)
   - [Download Node.js](https://nodejs.org/)
2. **npm** or **Yarn** (comes with Node.js)
3. **VS Code** (latest version)
   - [Download VS Code](https://code.visualstudio.com/)

---

## iii. Migration & Seed Database Steps


1. **Setup Prisma (if applicable):**
   - Install Prisma:
     ```bash
     npm install prisma --save-dev
     ```
   - Initialize Prisma:
     ```bash
     npx prisma init
     ```

2. **Create Database Migration:**
   - Define your schema in `prisma/schema.prisma`.
   - Run the migration:
     ```bash
     npx prisma migrate dev --name init
     ```

3. **Seed the Database:**
   - Add a seed script in `prisma/seed.ts` (or similar) to populate your database.
   - Run the seed script:
     ```bash
     npx prisma db seed
     ```


## iv. Running the App

Follow these steps to run the application locally:

1. **Local host**
code npm run dev 

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
