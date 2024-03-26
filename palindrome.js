// A palindrome is a series of characters that read the same
// forwards as backwards such as "hannah", "racecar" and "lol".

// For this Kata you need to write a function that takes a string of
// characters and returns the length, as an integer value, of longest alphanumeric
// palindrome that could be made by combining the characters in any order but using
// each character only once. The function should not be case sensitive.

// For example if passed "Hannah" it should return 6 and if passed "aabbcc_yYx_"
// it should return 9 because one possible palindrome would be "abcyxycba".

const longestPalindrome = (str) => {
  const characters = str.slice().toLowerCase().split('');
  const letters = characters.filter(
    (char) => (char >= 'a' && char <= 'z') || !isNaN(Number(char))
  );

  const strChars = letters.reduce((acc, char) => {
    if (acc[char]) acc[char]++;
    else acc[char] = 1;

    return acc;
  }, {});

  const doubleLetters = Object.values(strChars)
    .map((num) => {
      if (num % 2 !== 0) num--;
      return num;
    })
    .reduce((acc, char) => acc + char, 0);

  const strCharsAmt = Object.values(strChars).reduce(
    (acc, num) => acc + num,
    0
  );

  return strCharsAmt > doubleLetters ? doubleLetters + 1 : doubleLetters;
};

console.log(longestPalindrome('$aaabbbccddd_!jJpqlQx_.///yYabababhii_')); // returns 25
