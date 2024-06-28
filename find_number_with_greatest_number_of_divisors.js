// Find the integer from a to b (included) with the greatest number of divisors. For example:

// divNum(15, 30)   ==> 24
// divNum(1, 2)     ==> 2
// divNum(0, 0)     ==> 0
// divNum(52, 156)  ==> 120

// If there are several numbers that have the same (maximum) number of divisors,
// the smallest among them should be returned. Return the string "Error" if a > b.

const divNum = (a, b) => {
  if (a > b) return 'Error';

  let maxDivisors = 0;
  let numberWithMaxDivisors = 0;

  for (let i = a; i <= b; i++) {
    let divisors = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) divisors++;
    }

    if (divisors > maxDivisors) {
      maxDivisors = divisors;
      numberWithMaxDivisors = i;
    }
  }

  return numberWithMaxDivisors;
};
