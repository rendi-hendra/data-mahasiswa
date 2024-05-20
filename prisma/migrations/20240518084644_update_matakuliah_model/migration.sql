/*
  Warnings:

  - The primary key for the `enrollment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `matakuliah` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `matakuliah` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `matakuliah` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `kode_mk` to the `matakuliah` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `enrollment` DROP FOREIGN KEY `Enrollment_matakuliahId_fkey`;

-- AlterTable
ALTER TABLE `enrollment` DROP PRIMARY KEY,
    MODIFY `matakuliahId` VARCHAR(10) NOT NULL,
    ADD PRIMARY KEY (`mahasiswaId`, `matakuliahId`);

-- AlterTable
ALTER TABLE `matakuliah` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `kode_mk` VARCHAR(10) NOT NULL,
    ADD PRIMARY KEY (`kode_mk`);

-- CreateIndex
CREATE UNIQUE INDEX `matakuliah_name_key` ON `matakuliah`(`name`);

-- AddForeignKey
ALTER TABLE `Enrollment` ADD CONSTRAINT `Enrollment_matakuliahId_fkey` FOREIGN KEY (`matakuliahId`) REFERENCES `matakuliah`(`kode_mk`) ON DELETE RESTRICT ON UPDATE CASCADE;
