/*
  Warnings:

  - You are about to alter the column `price` on the `plate` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `plate` MODIFY `price` DOUBLE NOT NULL,
    MODIFY `available` BOOLEAN NOT NULL DEFAULT false;
