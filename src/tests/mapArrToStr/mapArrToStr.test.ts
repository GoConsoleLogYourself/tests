import { describe, expect, test } from "@jest/globals";
import mapArrToStr from "./mapArrToStr";

describe("validateValue", () => {
  test("Корректное знаение", () => {
    expect(mapArrToStr([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("Мешанина", () => {
    expect(mapArrToStr([1, 2, 3, null, true, "69"])).toEqual(["1", "2", "3"]);
  });
  test("Пустой массив", () => {
    expect(mapArrToStr([])).toEqual([]);
  });
  test("Отрицание", () => {
    expect(mapArrToStr([1,2,3])).not.toEqual([1,2,3,4]);
  });
});
