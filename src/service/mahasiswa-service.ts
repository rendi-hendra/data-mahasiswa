import { Mahasiswa, Dosen } from "@prisma/client";
import { prismaClient } from "../app/database";
import { ResponseError } from "../error/response-error";
import {
  CreateMahasiswaRequest,
  ListMahasiswaRequest,
  MahasiswaResponse,
  UpdateMahasiswaRequest,
  toMahasiswaResponse,
} from "../model/mahasiswa-model";
import { MahasiswaValidation } from "../validation/mahasiswa-validation";
import { Validation } from "../validation/validation";
import { logger } from "../app/logging";
import { Pageable } from "../model/page";

export class MahasiswaService {
  static async register(
    request: CreateMahasiswaRequest
  ): Promise<MahasiswaResponse> {
    const registerRequest = Validation.validate(
      MahasiswaValidation.REGISTER,
      request
    );

    const totalWithSameNim = await prismaClient.mahasiswa.count({
      where: {
        nim: registerRequest.nim,
      },
    });

    if (totalWithSameNim != 0) {
      throw new ResponseError(400, "Nim already exists");
    }

    const mahasiswa = await prismaClient.mahasiswa.create({
      data: registerRequest,
    });

    return toMahasiswaResponse(mahasiswa);
  }

  static async checkMahasiswaMustExists(nim: number): Promise<Mahasiswa> {
    const mahasiswa = await prismaClient.mahasiswa.findFirst({
      where: {
        nim: nim,
      },
    });

    if (!mahasiswa) {
      throw new ResponseError(404, "Mahasiswa not found");
    }

    return mahasiswa;
  }

  static async get(nim: number): Promise<MahasiswaResponse> {
    const mahasiswa = await prismaClient.mahasiswa.findFirst({
      where: {
        nim: nim,
      },
      include: {
        dosen: true,
        enrollment: {
          select: {
            matakuliah: true,
          },
        },
      },
    });

    if (!mahasiswa) {
      throw new ResponseError(404, "Mahasiswa not found");
    }

    return mahasiswa;
  }

  static async update(
    mahasiswa: Mahasiswa,
    request: UpdateMahasiswaRequest
  ): Promise<MahasiswaResponse> {
    const updateRequest = Validation.validate(
      MahasiswaValidation.UPDATE,
      request
    );

    await this.checkMahasiswaMustExists(updateRequest.nim);

    const result = await prismaClient.mahasiswa.update({
      where: {
        nim: mahasiswa.nim,
      },
      data: updateRequest,
    });

    return toMahasiswaResponse(result);
  }

  static async remove(
    mahasiswa: Mahasiswa,
    nim: number
  ): Promise<MahasiswaResponse> {
    await this.checkMahasiswaMustExists(nim);

    const result = await prismaClient.mahasiswa.delete({
      where: {
        nim: nim,
      },
    });

    return toMahasiswaResponse(result);
  }

  static async list(
    request: ListMahasiswaRequest
  ): Promise<Pageable<MahasiswaResponse>> {
    const listRequest = Validation.validate(MahasiswaValidation.List, request);

    const skip = (listRequest.page - 1) * listRequest.size;

    const filters: any = [];

    const mahasiswa = await prismaClient.mahasiswa.findMany({
      where: {
        AND: filters,
      },
      take: listRequest.size,
      skip: skip,
    });

    const total = await prismaClient.mahasiswa.count({
      where: {
        AND: filters,
      },
    });

    return {
      data: mahasiswa.map((mahasiswa) => toMahasiswaResponse(mahasiswa)),
      paging: {
        current_page: listRequest.page,
        total_page: Math.ceil(total / listRequest.size),
        size: listRequest.size,
      },
    };
  }
}
