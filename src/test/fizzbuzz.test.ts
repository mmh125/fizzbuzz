import { fizzbuzz } from "../main/fizzbuzz";

describe("fizzbuzz", () => {
  it.each([3, 6, 9])("should return fizz when given %s", (num) => {
    expect(fizzbuzz(num)).toBe("fizz");
  });

  it.each([5, 10, 20])("should return buzz when given %s", (num) => {
    expect(fizzbuzz(num)).toBe("buzz");
  });

  it.each([15, 30, 45])("should return fizzbuzz when given %s", (num) => {
    expect(fizzbuzz(num)).toBe("fizzbuzz");
  });

  describe.each([
    [1, "1"],
    [2, "2"],
    [4, "4"],
  ])("when given numbers", (number, expected) => {
    it(`should return ${number} when given ${expected}`, () => {
      expect(fizzbuzz(number)).toBe(expected);
    });
  });
});
