-- CreateTable
CREATE TABLE `mahasiswa` (
    `nim` INTEGER NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `prodi` VARCHAR(100) NOT NULL,
    `semester` INTEGER NOT NULL,

    PRIMARY KEY (`nim`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
