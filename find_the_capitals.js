// Write a function that takes a single non-empty string of only lowercase and uppercase
// ascii letters (word) as its argument, and returns an ordered list containing the indices of
// all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

const findCapitals = (word) => {
  const capitals = [];
  const letters = word.split('');

  letters.forEach((letter, index) => {
    if (letter === letter.toUpperCase()) capitals.push(index);
  });

  return capitals;
};

console.log(findCapitals('CodEWaRs'));
