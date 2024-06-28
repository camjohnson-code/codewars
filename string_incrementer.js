// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:
// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
  let num = '';
  let index = strng.length;

  for (let i = strng.length - 1; i >= 0; i--) {
    if (!isNaN(strng[i]) && strng[i] !== ' ') {
      num = strng[i] + num;
      index = i;
    } 
    else break;
  }

  if (num === '') return strng + '1';

  let incrementedNum = (Number(num) + 1).toString();

  incrementedNum = incrementedNum.padStart(num.length, '0');

  return strng.slice(0, index) + incrementedNum;
}

console.log(incrementString('foobar000'));
