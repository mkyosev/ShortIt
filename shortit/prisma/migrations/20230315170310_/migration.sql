/*
  Warnings:

  - You are about to drop the column `providerAccountId` on the `Account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "providerAccountId";

-- CreateTable
CREATE TABLE "Provider" (
    "accountId" TEXT NOT NULL,
    "providerAccountId" INTEGER NOT NULL,
    "provider" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Provider_accountId_key" ON "Provider"("accountId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_id_fkey" FOREIGN KEY ("id") REFERENCES "Provider"("accountId") ON DELETE RESTRICT ON UPDATE CASCADE;
