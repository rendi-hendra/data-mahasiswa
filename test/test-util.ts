import { Mahasiswa } from "@prisma/client";
import { prismaClient } from "../src/app/database";

export class MahasiswaTest {
  static async delete() {
    await prismaClient.mahasiswa.deleteMany({
      where: {
        // nim: 9999,
        name: "test",
      },
    });
  }

  static async create() {
    await prismaClient.mahasiswa.create({
      data: {
        nim: 9999,
        name: "test",
        prodi: "test",
        semester: 2,
      },
    });
  }

  static async get(): Promise<Mahasiswa> {
    const mahasiswa = await prismaClient.mahasiswa.findFirst({
      where: {
        nim: 9999,
      },
    });

    if (!mahasiswa) {
      throw new Error("Mahasiswa is not found");
    }

    return mahasiswa;
  }
}
