import { index, integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const androidTesters = sqliteTable(
  "android_testers",
  {
    id: text("id").primaryKey(),
    fullName: text("full_name").notNull(),
    googlePlayEmail: text("google_play_email").notNull(),
    country: text("country").notNull(),
    testingInterest: text("testing_interest").notNull(),
    androidDevice: text("android_device"),
    consent: integer("consent", { mode: "boolean" }).notNull().default(true),
    status: text("status").notNull().default("new"),
    createdAt: text("created_at").notNull(),
    updatedAt: text("updated_at").notNull(),
  },
  (table) => [
    uniqueIndex("idx_android_testers_google_play_email").on(table.googlePlayEmail),
    index("idx_android_testers_created_at").on(table.createdAt),
  ],
);
