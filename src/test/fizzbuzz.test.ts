import { fizzbuzz } from "../main/fizzbuzz";

describe("fizzbuzz", () => {
  it("should return fizz when given 3", () => {
    expect(fizzbuzz(3)).toBe("fizz");
  });

  it("should return buzz when given 5", () => {
    expect(fizzbuzz(5)).toBe("buzz");
  });

  it("should return fizz when given 6", () => {
    expect(fizzbuzz(6)).toBe("fizz");
  });

  it("should return fizz when given 9", () => {
    expect(fizzbuzz(9)).toBe("fizz");
  });

  it("should return 1 when given 1", () => {
    expect(fizzbuzz(1)).toBe("1");
  });

  it("should return 2 when given 2", () => {
    expect(fizzbuzz(2)).toBe("2");
  });
});
