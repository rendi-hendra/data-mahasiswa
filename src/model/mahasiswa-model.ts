import { Mahasiswa } from "@prisma/client";

export type MahasiswaResponse = {
  nim: number;
  name: string;
  prodi: string;
  semester: number;
};

export type CreateMahasiswaRequest = {
  nim: number;
  name: string;
  prodi: string;
  semester: number;
};

export type UpdateMahasiswaRequest = {
  nim: number;
  name: string;
  prodi: string;
  semester: number;
};

export type ListMahasiswaRequest = {
  page: number;
  size: number;
};

export function toMahasiswaResponse(mahasiswa: Mahasiswa): MahasiswaResponse {
  return {
    nim: mahasiswa.nim,
    name: mahasiswa.name,
    prodi: mahasiswa.prodi,
    semester: mahasiswa.semester,
  };
}
