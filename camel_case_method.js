// Write a method (or function, depending on the language) that converts a string to camelCase,
// that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"

const convertToCamelCase = (str) => {
  const words = str.split(' ').map((word) => {
    const firstLetter = word.slice(0, 1).toUpperCase();
    const remainingLetters = word.slice(1).toLowerCase();

    return firstLetter + remainingLetters;
  });

  return words.join('');
};

console.log(convertToCamelCase('hello case')); // "HelloCase"
console.log(convertToCamelCase('camel case word')); // "CamelCaseWord"
