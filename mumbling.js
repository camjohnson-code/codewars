// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


const accum = (s) => {
	return s.split('').map((letter, index) => {
    const lowerCaseLetter = letter.toLowerCase();
    const repeatedLetter = lowerCaseLetter.repeat(index + 1);
    const capitalizedFirstLetter = `${repeatedLetter.charAt(0).toUpperCase()}${repeatedLetter.slice(1)}`;

    return capitalizedFirstLetter;
  })
.join('-');
}