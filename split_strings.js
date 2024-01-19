// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second
// character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

const solution = (str) => {
  if (str.length % 2 !== 0) {
    str += '_';
  }

  return Array.from({ length: Math.ceil(str.length / 2) }, (_, index) =>
    str.slice(index * 2, index * 2 + 2)
  );
};
