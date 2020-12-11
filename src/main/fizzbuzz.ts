const isDivisibleBy = (num: number, divisor: number): boolean =>
  num % divisor === 0;

export const fizzbuzz = (number: number): string => {
  if (isDivisibleBy(number, 15)) return "fizzbuzz";
  if (isDivisibleBy(number, 3)) return "fizz";
  if (isDivisibleBy(number, 5)) return "buzz";

  return `${number}`;
};
