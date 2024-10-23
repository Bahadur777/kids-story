import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./schema.ts", // Assuming it's a TS file, not a TSX file
  out: "./drizzle", // Output directory
  dbCredentials: {
    url: 'postgresql://neondb_owner:isuKjW35zFZp@ep-ancient-salad-a50ml9s0.us-east-2.aws.neon.tech/kids-story-generator?sslmode=require'
  },
  strict: true, // Enforces strict mode on migrations
  verbose: true, // Enables verbose logging
});
