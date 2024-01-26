// Given an array of numbers, return an array, with each member of input array rounded to a nearest number, divisible by 5.

// For example:

// roundToFive([34.5, 56.2, 11, 13]);

// should return

// [35, 55, 10, 15]

const roundToFive = (numbers) => {
  return numbers.map((number) => Math.round(number / 5) * 5);
};
