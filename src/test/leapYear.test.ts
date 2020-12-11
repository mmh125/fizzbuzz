import { leapYear } from "../main/leapYear";

describe("leapYear", () => {
  it("should return true for 1996", () => {
    expect(leapYear(1996)).toBe(true);
  });

  it("should return false for 1995", () => {
    expect(leapYear(1995)).toBe(false);
  });

  it("should return false for 2001", () => {
    expect(leapYear(2001)).toBe(false);
  });

  it("should return false for 1900", () => {
    expect(leapYear(1900)).toBe(false);
  });

  it("should return true for 2000", () => {
    expect(leapYear(2000)).toBe(true);
  });

  it("should return true for 2004", () => {
    expect(leapYear(2004)).toBe(true);
  });

  it("should return true for 100", () => {
    expect(leapYear(100)).toBe(false);
  });

  it("should return true for 200", () => {
    expect(leapYear(200)).toBe(false);
  });

  it("should return true for 300", () => {
    expect(leapYear(300)).toBe(false);
  });
});
