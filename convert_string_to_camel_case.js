// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case).
// The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

const toCamelCase = (str) => {
  const words = str.split(/-|_/);
  let camelCase = '';

  for (let i = 0; i < words.length; i++) {
    if (i === 0) camelCase += words[i];
    else camelCase += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return camelCase;
}

console.log(toCamelCase('the-stealth-warrior')); // "theStealthWarrior"
