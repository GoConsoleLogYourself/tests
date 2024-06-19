import counterSlice, { decrement, increment } from "./counterSlice";

describe("reducers test", () => {
  test("inc", () => {
    expect(counterSlice({ value: 0 }, increment())).toEqual({ value: 1 });
  });
  test("dec", () => {
    expect(counterSlice({ value: 0 }, decrement())).toEqual({ value: -1 });
  });
  test("with empty state", () => {
    expect(counterSlice(undefined, decrement())).toEqual({ value: -1 });
    expect(counterSlice(undefined, increment())).toEqual({ value: 1 });
  });
});
