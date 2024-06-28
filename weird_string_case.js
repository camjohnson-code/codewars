// Write a function that accepts a string, and returns the same string with all even
// indexed characters in each word upper cased, and all odd indexed characters in each word lower cased.
// The indexing just explained is zero based, so the zero-ith index is even,
// therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' ').
// Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"

function toWeirdCase(string) {
  const words = string.split(' ');
  let uppercase = true;

  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split('');

    for (let j = 0; j < letters.length; j++) {
      if (uppercase) letters[j] = letters[j].toUpperCase();
      else letters[j] = letters[j].toLowerCase();

      uppercase = !uppercase;
    }

    words[i] = letters.join('');
    uppercase = true;
  }

  return words.join(' ');
}

console.log(toWeirdCase('This is a test'));
