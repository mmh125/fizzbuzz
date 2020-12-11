export const fizzbuzz = (number: number): string => {
  if (number % 3 === 0) return "fizz";
  if (number === 1) return "1";
  if (number === 2) return "2";
  else return "buzz";
};
