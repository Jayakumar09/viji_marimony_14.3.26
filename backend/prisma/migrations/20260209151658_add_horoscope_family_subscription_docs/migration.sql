-- AlterTable
ALTER TABLE "subscriptions" ADD COLUMN "success_fee" REAL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN "birth_date" TEXT;
ALTER TABLE "users" ADD COLUMN "birth_place" TEXT;
ALTER TABLE "users" ADD COLUMN "birth_time" TEXT;
ALTER TABLE "users" ADD COLUMN "dhosam" TEXT;
ALTER TABLE "users" ADD COLUMN "father_caste" TEXT;
ALTER TABLE "users" ADD COLUMN "father_name" TEXT;
ALTER TABLE "users" ADD COLUMN "father_occupation" TEXT;
ALTER TABLE "users" ADD COLUMN "lagnam" TEXT;
ALTER TABLE "users" ADD COLUMN "manual_verification_notes" TEXT;
ALTER TABLE "users" ADD COLUMN "manual_verification_status" TEXT;
ALTER TABLE "users" ADD COLUMN "mother_caste" TEXT;
ALTER TABLE "users" ADD COLUMN "mother_name" TEXT;
ALTER TABLE "users" ADD COLUMN "mother_occupation" TEXT;
ALTER TABLE "users" ADD COLUMN "natchathiram" TEXT;
ALTER TABLE "users" ADD COLUMN "raasi" TEXT;
ALTER TABLE "users" ADD COLUMN "subscription_end" DATETIME;
ALTER TABLE "users" ADD COLUMN "subscription_start" DATETIME;
ALTER TABLE "users" ADD COLUMN "subscription_tier" TEXT;
ALTER TABLE "users" ADD COLUMN "success_fee" REAL;

-- CreateTable
CREATE TABLE "documents" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "document_type" TEXT NOT NULL,
    "document_url" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "rejected_reason" TEXT,
    "reviewed_by" TEXT,
    "reviewed_at" DATETIME,
    "uploaded_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "documents_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "rasi_nakshatras" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rasi" TEXT NOT NULL,
    "nakshatra" TEXT NOT NULL,
    "rasi_order" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "rasi_nakshatras_nakshatra_key" ON "rasi_nakshatras"("nakshatra");
