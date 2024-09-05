// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates
// all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:
// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

const encrypt = (text, n) => {
  if (!text || n <= 0) return text;

  let outputStr = text;

  while (n > 0) {
    let oddChars = [];
    let evenChars = [];

    for (let i = 0; i < outputStr.length; i++) {
      if (i % 2 === 0) evenChars.push(outputStr[i]);
      else oddChars.push(outputStr[i]);
    }

    outputStr = oddChars.join('') + evenChars.join('');
    n--;
  }

  return outputStr;
};

// console.log(encrypt('012345', 1)); //  =>  "135024"
// console.log(encrypt('012345', 2)); //  =>  "135024"  ->  "304152"
// console.log(encrypt('012345', 3)); //  =>  "135024"  ->  "304152"  ->  "012345"

// console.log(encrypt('01234', 1)); // =>  "13024"
// console.log(encrypt('01234', 2)); // =>  "13024"  ->  "32104"
// console.log(encrypt('01234', 3)); // =>  "13024"  ->  "32104"  ->  "20314"

const decrypt = (encryptedText, n) => {
  if (!encryptedText || n <= 0) return encryptedText;

  let outputStr = encryptedText;

  while (n > 0) {
    const halfLength = Math.floor(outputStr.length / 2);
    let oddChars = outputStr.slice(0, halfLength);
    let evenChars = outputStr.slice(halfLength);

    let decryptedStr = '';

    for (let i = 0; i < evenChars.length; i++) {
      if (i < oddChars.length) decryptedStr += evenChars[i] + oddChars[i];
      else decryptedStr += evenChars[i];
    }

    outputStr = decryptedStr;

    n--;
  }

  return outputStr;
};

console.log(decrypt('This is a test!', 0)); // 'This is a test!'
console.log(decrypt('hsi  etTi sats!', 1)); // 'This is a test!'
console.log(decrypt('s eT ashi tist!', 2)); // 'This is a test!'
console.log(decrypt(' Tah itse sits!', 3)); // 'This is a test!'
console.log(decrypt('This is a test!', 4)); // 'This is a test!'
console.log(decrypt('This is a test!', -1)); // 'This is a test!'
console.log(decrypt('hskt svr neetn!Ti aai eyitrsig', 1)); // 'This kata is very interesting!'
