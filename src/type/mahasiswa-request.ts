import { Mahasiswa } from "@prisma/client";
import { Request } from "express";

export interface MahasiswaRequest extends Request {
  mahasiswa?: Mahasiswa;
}
