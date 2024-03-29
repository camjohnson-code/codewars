// Given a string s, find the first non-repeating character in it and return its index.
// If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

const firstUniqueChar = (s) => {
  const letterMap = new Map();

  for (let letter of s) {
    letterMap.set(letter, (letterMap.get(letter) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (letterMap.get(s[i]) === 1) return i;
  }

  return -1;
};
