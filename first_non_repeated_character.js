// Write a function named first_non_repeating_letter† that takes a string input,
// and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't',
// since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character,
// but the function should return the correct case for the initial letter.
// For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("");

// † Note: the function is called firstNonRepeatingLetter for historical reasons,
// but your function should handle any Unicode character.

const firstNonRepeatingLetter = (s) => {
  let repeatedLetter = '';
  const letterOccurrences = s
    .toLowerCase()
    .split('')
    .reduce((acc, letter) => {
      const lowerCaseLetter = letter.toLowerCase();
      if (acc[lowerCaseLetter]) acc[lowerCaseLetter]++;
      else acc[lowerCaseLetter] = 1;

      return acc;
    }, {});

  for (const letter of s) {
    if (letterOccurrences[letter.toLowerCase()] === 1) {
      repeatedLetter = letter;
      break;
    }
  }

  return repeatedLetter;
};

console.log(firstNonRepeatingLetter('sTresS'));
