// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// SOLUTION 1
// function positiveSum(arr) {
//   // create new array
//   var positiveArr = [0];

//   // loop through array
//   for (i = 0; i < arr.length; i++) {
//     // check if index is positive
//     // push positive to new array
//     if (arr[i] > 0) positiveArr.push(arr[i]);
//   }

//   //   reduce on positiveArr
//   var sum = positiveArr.reduce(function (a, b) {
//     return a + b;
//   });

//   //   return sum
//   return sum;
// }

// SOLUTION 2
function positiveSum(arr) {
  // set total to 0
  var total = 0;

  // loop through array
  for (i = 0; i < arr.length; i++) {
    // check if integer is positive
    // add value to total
    if (arr[i] > 0) total += arr[i];
  }

  //   return total
  return total;
}

console.log(positiveSum([1, 2, 3, 4, 5]));
