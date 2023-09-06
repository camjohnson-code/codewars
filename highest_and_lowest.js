// In this little assignment you are given a string of
// space separated numbers, and have to return the highest
// and lowest number. Output string must be two numbers
// separated by a single space, and highest number is first.

function highAndLow(str){
    // split string into array and sort 
    strArray = str.split(' ').sort((a, b) => a - b)
    
    // return last index and 0 index
    console.log(`${strArray[strArray.length -1]} ${strArray[0]}`); 
}

highAndLow(("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
highAndLow(("10 2 -1 -20"), "10 -20", "Sorting a collection of strings is different from sorting a collection of numbers");