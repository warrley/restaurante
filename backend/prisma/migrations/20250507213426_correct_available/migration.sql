/*
  Warnings:

  - You are about to drop the column `avaliable` on the `plate` table. All the data in the column will be lost.
  - Added the required column `available` to the `Plate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `plate` DROP COLUMN `avaliable`,
    ADD COLUMN `available` BOOLEAN NOT NULL;
