// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
// You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat

// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

const wave = (str) => {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;

    let waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    result.push(waveStr);
  }

  return result;
};

console.log(wave('hello')); // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave('codewars')); // ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
console.log(wave('two words')); // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
console.log(wave('  gap  ')); // [" Gap ", " gAp ", " gaP "];
