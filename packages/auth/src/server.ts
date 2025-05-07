import { db } from "@nexack/db";
import * as schema from "@nexack/db/schema/auth";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { organization } from "better-auth/plugins";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      ...schema,
      user: schema.users,
    },
    usePlural: true,
  }),
  plugins: [organization()],
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: [
    process.env.NEXT_PUBLIC_EXPRESS_API_URL!,
    process.env.NEXT_PUBLIC_FRONTEND_URL!,
  ],
});
