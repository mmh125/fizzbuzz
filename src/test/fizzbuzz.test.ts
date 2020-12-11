import { fizzbuzz } from "../main/fizzbuzz";

describe("fizzbuzz", () => {
  it("should return fizz when given 3", () => {
    expect(fizzbuzz(3)).toBe("fizz");
  });
  it("should return fizz when given 5", () => {
    expect(fizzbuzz(5)).toBe("buzz");
  });
});
