/*
  Warnings:

  - You are about to drop the column `lagnam` on the `users` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "date_of_birth" DATETIME NOT NULL,
    "age" INTEGER NOT NULL,
    "community" TEXT NOT NULL DEFAULT 'Boyar',
    "sub_caste" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'India',
    "education" TEXT,
    "profession" TEXT,
    "income" TEXT,
    "marital_status" TEXT NOT NULL,
    "height" TEXT,
    "weight" TEXT,
    "complexion" TEXT,
    "profile_photo" TEXT,
    "profile_photo_scale" REAL DEFAULT 1.0,
    "profile_photo_x" REAL DEFAULT 0,
    "profile_photo_y" REAL DEFAULT 0,
    "photos" TEXT,
    "bio" TEXT,
    "family_values" TEXT,
    "about_family" TEXT,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "is_premium" BOOLEAN NOT NULL DEFAULT false,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "phone_verified" BOOLEAN NOT NULL DEFAULT false,
    "photos_verified" BOOLEAN NOT NULL DEFAULT false,
    "last_login_at" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "raasi" TEXT,
    "natchathiram" TEXT,
    "dhosam" TEXT,
    "birth_date" TEXT,
    "birth_time" TEXT,
    "birth_place" TEXT,
    "father_name" TEXT,
    "father_occupation" TEXT,
    "father_caste" TEXT,
    "mother_name" TEXT,
    "mother_occupation" TEXT,
    "mother_caste" TEXT,
    "subscription_tier" TEXT,
    "success_fee" REAL,
    "subscription_start" DATETIME,
    "subscription_end" DATETIME,
    "manual_verification_status" TEXT,
    "manual_verification_notes" TEXT
);
INSERT INTO "new_users" ("about_family", "age", "bio", "birth_date", "birth_place", "birth_time", "city", "community", "complexion", "country", "created_at", "date_of_birth", "dhosam", "education", "email", "email_verified", "family_values", "father_caste", "father_name", "father_occupation", "first_name", "gender", "height", "id", "income", "is_active", "is_premium", "is_verified", "last_login_at", "last_name", "manual_verification_notes", "manual_verification_status", "marital_status", "mother_caste", "mother_name", "mother_occupation", "natchathiram", "password", "phone", "phone_verified", "photos", "photos_verified", "profession", "profile_photo", "raasi", "state", "sub_caste", "subscription_end", "subscription_start", "subscription_tier", "success_fee", "updated_at", "weight") SELECT "about_family", "age", "bio", "birth_date", "birth_place", "birth_time", "city", "community", "complexion", "country", "created_at", "date_of_birth", "dhosam", "education", "email", "email_verified", "family_values", "father_caste", "father_name", "father_occupation", "first_name", "gender", "height", "id", "income", "is_active", "is_premium", "is_verified", "last_login_at", "last_name", "manual_verification_notes", "manual_verification_status", "marital_status", "mother_caste", "mother_name", "mother_occupation", "natchathiram", "password", "phone", "phone_verified", "photos", "photos_verified", "profession", "profile_photo", "raasi", "state", "sub_caste", "subscription_end", "subscription_start", "subscription_tier", "success_fee", "updated_at", "weight" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
