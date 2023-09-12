// Create a function that gives a personalized greeting.
// This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

//      case	           return
// name equals owner	'Hello boss'
// otherwise	        'Hello guest'

// SOLUTION 1

// function greet(name, owner) {
//   if (name === owner) return `Hello boss`;
//   return `Hello guest`;
// }

// SOLUTION 2

const greet = (name, owner) => (name === owner ? `Hello owner` : `Hello guest`);

console.log(greet("Greg", "Daniel"));
