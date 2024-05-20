import { Dosen } from "@prisma/client";

export type DosenResponse = {
  id: number;
  name: string;
};

export function toDosenResponse(dosen: Dosen): DosenResponse {
  return {
    id: dosen.id,
    name: dosen.name,
  };
}
