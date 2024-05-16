import express from "express";
import { MahasiswaController } from "../controller/mahasiswa-controller";

export const router = express.Router();

router.post("/api/mahasiswa", MahasiswaController.register);
router.get("/api/mahasiswa/:nim(\\d+)", MahasiswaController.get);
router.get("/api/mahasiswa/", MahasiswaController.list);
router.put("/api/mahasiswa/:nim(\\d+)", MahasiswaController.update);
router.delete("/api/mahasiswa/:nim(\\d+)", MahasiswaController.remove);
