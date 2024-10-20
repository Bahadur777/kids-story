import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/config/schema.tsx",
  out: "./drizzle",
  dbCredentials: {
    url: 'postgresql://neondb_owner:isuKjW35zFZp@ep-ancient-salad-a50ml9s0.us-east-2.aws.neon.tech/kids-story-generator?sslmode=require'
  },
  strict: true,
  verbose: true,
});