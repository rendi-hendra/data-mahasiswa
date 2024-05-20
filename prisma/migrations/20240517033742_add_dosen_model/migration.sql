/*
  Warnings:

  - Added the required column `dpa_id` to the `mahasiswa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `mahasiswa` ADD COLUMN `dpa_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Dosen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `mahasiswa` ADD CONSTRAINT `mahasiswa_dpa_id_fkey` FOREIGN KEY (`dpa_id`) REFERENCES `Dosen`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
