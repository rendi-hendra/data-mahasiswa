import supertest from "supertest";
import { MahasiswaTest } from "./test-util";
import { logger } from "../src/app/logging";
import { web } from "./../src/app/web";

describe("POST /api/mahasiswa", () => {
  beforeEach(async () => {
    await MahasiswaTest.create();
  });

  afterEach(async () => {
    await MahasiswaTest.delete();
  });

  it("should reject register new mahasiswa if request is invalid", async () => {
    const response = await supertest(web).post("/api/mahasiswa").send({
      name: "",
      prodi: "",
    });

    logger.debug(response.body);
    expect(response.status).toBe(400);
    expect(response.body.errors).toBeDefined();
  });

  it("should register new mahasiswa", async () => {
    const response = await supertest(web).post("/api/mahasiswa").send({
      nim: 6666,
      name: "test",
      prodi: "test",
      semester: 2,
    });

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.nim).toBe(6666);
    expect(response.body.data.name).toBe("test");
    expect(response.body.data.prodi).toBe("test");
  });
  it("should reject register nim mahasiswa same", async () => {
    const response = await supertest(web).post("/api/mahasiswa").send({
      nim: 9999,
      name: "test",
      prodi: "test",
      semester: 2,
    });

    logger.debug(response.body);
    expect(response.status).toBe(400);
    expect(response.body.errors).toBeDefined();
  });
});

describe("GET /api/mahasiswa/:nim", () => {
  beforeEach(async () => {
    await MahasiswaTest.create();
  });

  afterEach(async () => {
    await MahasiswaTest.delete();
  });

  it("should be able get mahasiswa", async () => {
    const mahasiswa = await MahasiswaTest.get();
    const response = await supertest(web).get(
      `/api/mahasiswa/${mahasiswa.nim}`
    );

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.nim).toBe(mahasiswa.nim);
    expect(response.body.data.name).toBe(mahasiswa.name);
    expect(response.body.data.prodi).toBe(mahasiswa.prodi);
    expect(response.body.data.semester).toBe(mahasiswa.semester);
  });

  it("should reject get book if book is not found", async () => {
    const mahasiswa = await MahasiswaTest.get();
    const response = await supertest(web).get(
      `/api/mahasiswa/${mahasiswa.nim + 1}`
    );

    logger.debug(response.body);
    expect(response.status).toBe(404);
    expect(response.body.errors).toBeDefined();
  });
});

describe("PUT /api/mahasiswa/:nim", () => {
  beforeEach(async () => {
    await MahasiswaTest.create();
  });

  afterEach(async () => {
    await MahasiswaTest.delete();
  });

  it("should be able to update mahasiswa", async () => {
    const mahasiswa = await MahasiswaTest.get();
    const response = await supertest(web)
      .put(`/api/mahasiswa/${mahasiswa.nim}`)
      .send({
        name: "test",
        prodi: "rpl",
        semester: 8,
      });

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.nim).toBe(mahasiswa.nim);
    expect(response.body.data.name).toBe("test");
    expect(response.body.data.prodi).toBe("rpl");
    expect(response.body.data.semester).toBe(8);
  });
});

describe("DELETE /api/mahasiswa/:nim", () => {
  beforeEach(async () => {
    await MahasiswaTest.create();
  });

  afterEach(async () => {
    await MahasiswaTest.delete();
  });

  it("should be able to remove mahasiswa", async () => {
    const mahasiswa = await MahasiswaTest.get();
    const response = await supertest(web).delete(
      `/api/mahasiswa/${mahasiswa.nim}`
    );

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data).toBe("OK");
  });

  it("should reject remove mahasiswa if nim is not found", async () => {
    const mahasiswa = await MahasiswaTest.get();
    const response = await supertest(web).delete(
      `/api/mahasiswa/${mahasiswa.nim + 1}`
    );

    logger.debug(response.body);
    expect(response.status).toBe(404);
    expect(response.body.errors).toBeDefined();
  });
});

describe("GET /api/books/", () => {
  beforeEach(async () => {
    await MahasiswaTest.create();
  });
  afterEach(async () => {
    await MahasiswaTest.delete();
  });

  it("should be able to list mahasiswa", async () => {
    const mahasiswa = await MahasiswaTest.get();

    const response = await supertest(web).get(`/api/mahasiswa/`);

    logger.debug(response.body);
    expect(response.status).toBe(200);
  });
});
