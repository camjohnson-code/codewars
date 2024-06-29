// Consider the following class:

// var Animal = {
//     name: "Cat",
//     numberOfLegs: 4
// }
// Write a method that accepts a list of objects of type Animal, and returns a new list.
// The new list should be a copy of the original list, sorted first by the animal's number of legs, and then by its name.

// If an empty list is passed in, it should return an empty list back.

// // Example usage:
const animals = [
  { name: 'Cat', numberOfLegs: 4 },
  { name: 'Dog', numberOfLegs: 4 },
  { name: 'Spider', numberOfLegs: 8 },
  { name: 'Bird', numberOfLegs: 2 },
];

const sortAnimals = (animalList) => {
  if (animalList.length === 0) return [];

  const sortedList = animalList.sort((a, b) => {
    if (a.numberOfLegs !== b.numberOfLegs) return a.numberOfLegs - b.numberOfLegs;
    return a.name.localeCompare(b.name);
  });

  return sortedList;
}

console.log(sortAnimals(animals));
// console.log(`-----`);
// console.log(...animals);
