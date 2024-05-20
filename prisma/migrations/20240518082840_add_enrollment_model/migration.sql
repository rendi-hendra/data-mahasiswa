/*
  Warnings:

  - You are about to drop the column `nim` on the `matakuliah` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `matakuliah` DROP FOREIGN KEY `matakuliah_nim_fkey`;

-- AlterTable
ALTER TABLE `matakuliah` DROP COLUMN `nim`;

-- CreateTable
CREATE TABLE `Enrollment` (
    `mahasiswaId` INTEGER NOT NULL,
    `matakuliahId` INTEGER NOT NULL,

    PRIMARY KEY (`mahasiswaId`, `matakuliahId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Enrollment` ADD CONSTRAINT `Enrollment_mahasiswaId_fkey` FOREIGN KEY (`mahasiswaId`) REFERENCES `mahasiswa`(`nim`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enrollment` ADD CONSTRAINT `Enrollment_matakuliahId_fkey` FOREIGN KEY (`matakuliahId`) REFERENCES `matakuliah`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
