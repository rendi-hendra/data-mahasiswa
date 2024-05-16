import { NextFunction, Request, Response } from "express";
import {
  CreateMahasiswaRequest,
  ListMahasiswaRequest,
  UpdateMahasiswaRequest,
} from "../model/mahasiswa-model";
import { MahasiswaService } from "../service/mahasiswa-service";
import { MahasiswaRequest } from "../type/mahasiswa-request";

export class MahasiswaController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const request: CreateMahasiswaRequest =
        req.body as CreateMahasiswaRequest;
      const response = await MahasiswaService.register(request);
      res.status(200).json({
        data: response,
      });
    } catch (error) {
      next(error);
    }
  }

  static async get(req: Request, res: Response, next: NextFunction) {
    try {
      const nim = Number(req.params.nim);
      const response = await MahasiswaService.get(nim);
      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const request: UpdateMahasiswaRequest =
        req.body as UpdateMahasiswaRequest;
      request.nim = Number(req.params.nim);
      const response = await MahasiswaService.update(req.body, request);
      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }

  static async remove(
    req: MahasiswaRequest,
    res: Response,
    next: NextFunction
  ) {
    try {
      const nim = Number(req.params.nim);
      const response = await MahasiswaService.remove(req.mahasiswa!, nim);
      res.status(200).json({
        data: "OK",
      });
    } catch (e) {
      next(e);
    }
  }

  static async list(req: MahasiswaRequest, res: Response, next: NextFunction) {
    try {
      const request: ListMahasiswaRequest = {
        page: req.query.page ? Number(req.query.page) : 1,
        size: req.query.size ? Number(req.query.size) : 10,
      };
      const response = await MahasiswaService.list(request);
      res.status(200).json({
        data: response,
      });
    } catch (e) {
      next(e);
    }
  }
}
