import gcd from "../../src/modules/calculation/util/gcd";

describe("gcd function", () => {
  it("calculates the GCD of two positive integers", () => {
    expect(gcd(48, 18)).toBe(6);
    expect(gcd(56, 98)).toBe(14);
  });

  it("calculates the GCD when one of the numbers is zero", () => {
    expect(gcd(10, 0)).toBe(10);
    expect(gcd(0, 25)).toBe(25);
  });

  it("calculates the GCD of two negative integers", () => {
    expect(gcd(-48, -18)).toBe(6);
    expect(gcd(-56, -98)).toBe(14);
  });
});
