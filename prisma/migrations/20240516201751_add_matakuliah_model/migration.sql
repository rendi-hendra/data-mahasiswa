-- CreateTable
CREATE TABLE `matakuliah` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `sks` INTEGER NOT NULL,
    `nim` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `matakuliah` ADD CONSTRAINT `matakuliah_nim_fkey` FOREIGN KEY (`nim`) REFERENCES `mahasiswa`(`nim`) ON DELETE RESTRICT ON UPDATE CASCADE;
