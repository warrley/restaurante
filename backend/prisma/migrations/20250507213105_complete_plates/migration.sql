/*
  Warnings:

  - Added the required column `avaliable` to the `Plate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Plate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Plate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Plate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `plate` ADD COLUMN `avaliable` BOOLEAN NOT NULL,
    ADD COLUMN `category` VARCHAR(191) NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `ingredients` JSON NULL,
    ADD COLUMN `price` INTEGER NOT NULL;
