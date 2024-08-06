// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function breakCamelCase(string) {
  if (!string) return '';
  let words = [];
  let word = '';

  for (let letter of string) {
    if (letter !== letter.toUpperCase()) word += letter;
    else {
      words.push(word);
      word = '';
      word += letter;
    }
  }

  words.push(word);

  return words.join(' ');
}

console.log(breakCamelCase('camelCasing')); // "camel Casing"
console.log(breakCamelCase('identifier')); // 'identifier
console.log(breakCamelCase('')); // ''
