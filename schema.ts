import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const contactRequests = pgTable("contact_requests", {
  id: serial("id").primaryKey(),

  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),

  phone: varchar("phone", { length: 30 }),

  places: text("places"),
  message: text("message"),

  createdAt: timestamp("created_at").defaultNow(),
});
