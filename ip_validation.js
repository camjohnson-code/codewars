// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
// IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89

// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

const isValidIp = (str) => {
  const octets = str.split('.');
  if (octets.length !== 4) return false;

  for (let i = 0; i < octets.length; i++) {
    const octet = octets[i];
    if (octet.length > 1 && octet.startsWith('0')) return false;
    const num = Number(octet);
    if (isNaN(num) || num < 0 || num > 255) return false;
    if (!/^\d+$/.test(octet)) return false;
  }

  return true;
};

console.log(isValidIp("0.0.0.0")); // true
console.log(isValidIp("12.255.56.1")); // true
console.log(isValidIp("137.255.156.100")); // true
console.log(isValidIp('')); // false
console.log(isValidIp('abc.def.ghi.jkl')); // false
