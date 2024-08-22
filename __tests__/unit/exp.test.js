import exp from "../../src/modules/calculation/util/exp";

// commenting for test. test.

describe("exp function", () => {
  test("calculates positive integer powers", () => {
    expect(exp(2, 3)).toBe(8); // 2^3 = 8
    expect(exp(5, 4)).toBe(625); // 5^4 = 625
  });

  test("calculates power of 0", () => {
    expect(exp(2, 0)).toBe(1); // x^0 = 1 for any x
    expect(exp(100, 0)).toBe(1);
  });

  test("calculates large powers", () => {
    expect(exp(2, 10)).toBe(1024); // 2^10 = 1024
  });
});
