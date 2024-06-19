import { describe, expect, test } from "@jest/globals";
import delay from "./delay";

describe("delay", () => {
  beforeAll(() => {});
  beforeEach(() => {
    //Добавить в БД что-то
  });
  test("Корректное знаение", async () => {
    const sum = await delay(() => 5 + 5, 1000);
    expect(sum).toBe(10);
  });
  afterEach(() => {
    jest.clearAllMocks();
    //Удалить из БД
  });
  afterAll(() => {});
});
