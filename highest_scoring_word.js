// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position
// in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

const high = (word) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let highestPoints = 0;
  let highestScoringWord = '';
  const words = word.split(' ').filter((word) => word);

  for (const word of words) {
    const pointTotal = word
      .split('')
      .reduce((acc, letter) => acc + alphabet.indexOf(letter) + 1, 0);

    if (pointTotal > highestPoints) {
      highestPoints = pointTotal;
      highestScoringWord = word;
    }
  }

  return highestScoringWord;
};

console.log(high('man i need a taxi up to ubud'));
