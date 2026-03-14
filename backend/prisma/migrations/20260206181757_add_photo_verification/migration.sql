-- CreateTable
CREATE TABLE "photo_verifications" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "photo_url" TEXT NOT NULL,
    "photo_type" TEXT NOT NULL DEFAULT 'PROFILE',
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "rejected_reason" TEXT,
    "reviewed_by" TEXT,
    "reviewed_at" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "photo_verifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

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
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_users" ("about_family", "age", "bio", "city", "community", "complexion", "country", "created_at", "date_of_birth", "education", "email", "email_verified", "family_values", "first_name", "gender", "height", "id", "income", "is_active", "is_premium", "is_verified", "last_login_at", "last_name", "marital_status", "password", "phone", "phone_verified", "photos", "profession", "profile_photo", "state", "sub_caste", "updated_at", "weight") SELECT "about_family", "age", "bio", "city", "community", "complexion", "country", "created_at", "date_of_birth", "education", "email", "email_verified", "family_values", "first_name", "gender", "height", "id", "income", "is_active", "is_premium", "is_verified", "last_login_at", "last_name", "marital_status", "password", "phone", "phone_verified", "photos", "profession", "profile_photo", "state", "sub_caste", "updated_at", "weight" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
