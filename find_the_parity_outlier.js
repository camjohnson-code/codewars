// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a
// single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

const findOutlier = (integers) => {
  let evenCount = 0;
  let oddCount = 0;

  integers.forEach((num) => {
    if (num % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  });

  const majorityParity = evenCount > oddCount ? 0 : 1;

  return integers.find((num) => Math.abs(num) % 2 !== majorityParity);
};
