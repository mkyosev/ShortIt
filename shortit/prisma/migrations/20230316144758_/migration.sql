-- AlterTable
ALTER TABLE "Url" ALTER COLUMN "url" DROP NOT NULL,
ALTER COLUMN "slug" DROP NOT NULL,
ALTER COLUMN "active" DROP NOT NULL,
ALTER COLUMN "deleted" DROP NOT NULL,
ALTER COLUMN "isCustomSlug" DROP NOT NULL;