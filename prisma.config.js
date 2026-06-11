import dotenv from "dotenv";
import { defineConfig } from "prisma/config";

dotenv.config({ path: ".env.local" });

export default defineConfig({
  earlyAccess: true,
  schema: "prisma/schema.prisma",
  datasources: {
    db: {
      provider: "postgresql",
      url: process.env.DATABASE_URL,
    },
  },
});
