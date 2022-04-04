/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Role` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Role" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Role_slug_key" ON "Role"("slug");
