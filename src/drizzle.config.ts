import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./schema.ts", // Assuming it's a TS file, not a TSX file
  out: "./drizzle", // Output directory
  dbCredentials: {
    url:'process.env.NEXT_PUBLIC_DATABASE_URL'
  },
  strict: true, // Enforces strict mode on migrations
  verbose: true, // Enables verbose logging
});
