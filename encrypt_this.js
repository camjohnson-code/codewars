// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter

// Keepin' it simple: There are no special characters in the input.

// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

const encryptThis = (str) => {
  return str
    .split(' ')
    .map((word) => {
      const firstLetter = word[0].charCodeAt();
      const newSecondLetter = word[word.length - 1];
      const middle = word.slice(2, word.length - 1);
      const newLastLetter = word[1];

      return `${firstLetter}${
        word.length >= 3 ? newSecondLetter : word.length === 2 ? word[1] : ''
      }${word.length >= 4 ? middle : ''}${
        word.length >= 3 ? newLastLetter : ''
      }`;
    })
    .join(' ');
};

console.log(encryptThis('Hello')); // "72olle"
console.log(encryptThis('good')); // "103doo"
console.log(encryptThis('hello world')); // "104olle 119drlo"
console.log(encryptThis('The more he saw the less he spoke')); // "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"
console.log(encryptThis('A wise old owl lived in an oak')); // "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
