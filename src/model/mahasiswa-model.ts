import { Mahasiswa, Dosen } from "@prisma/client";
import { DosenResponse } from "./dosen._model";

export type MahasiswaResponse = {
  nim: number;
  name: string;
  prodi: string;
  semester: number;
  dpa_id: number;
  dpa?: DosenResponse;
};

export type CreateMahasiswaRequest = {
  nim: number;
  name: string;
  prodi: string;
  semester: number;
  dpa_id: number;
};

export type UpdateMahasiswaRequest = {
  nim: number;
  name: string;
  prodi: string;
  semester: number;
  dpa_id: number;
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
    dpa_id: mahasiswa.dpa_id,
  };
}
