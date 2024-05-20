import { ZodType, z } from "zod";

export class MahasiswaValidation {
  static readonly REGISTER: ZodType = z.object({
    nim: z.number(),
    name: z.string().min(1).max(100),
    prodi: z.string().min(1).max(100),
    semester: z.number(),
    dpa_id: z.number(),
  });

  static readonly UPDATE: ZodType = z.object({
    nim: z.number().optional(),
    name: z.string().min(1).max(100).optional(),
    prodi: z.string().min(1).max(100).optional(),
    semester: z.number().optional(),
  });

  static readonly List: ZodType = z.object({
    page: z.number().min(1).positive(),
    size: z.number().min(1).max(100).positive(),
  });
}
