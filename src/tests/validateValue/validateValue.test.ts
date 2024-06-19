import { describe, expect, test } from "@jest/globals";
import validateValue from "./validateValue";

describe("validateValue", () => {
  test("Корректное знаение", () => {
    expect(validateValue(50)).toBe(true);
  });
  test("Меньше корректного", () => {
    expect(validateValue(-50)).toBe(false);
  });
  test("Больше корректного", () => {
    expect(validateValue(150)).toBe(false);
  });
  test("Нижний порог корректного", () => {
    expect(validateValue(0)).toBe(true);
  });
  test("Верхний порог корректного", () => {
    expect(validateValue(100)).toBe(true);
  });
});
