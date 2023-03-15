/*
  Warnings:

  - Changed the type of `providerAccountId` on the `Account` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `deleted` to the `Url` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isCustomSlug` to the `Url` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "providerAccountId",
ADD COLUMN     "providerAccountId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Url" ADD COLUMN     "deleted" BOOLEAN NOT NULL,
ADD COLUMN     "isCustomSlug" BOOLEAN NOT NULL;
