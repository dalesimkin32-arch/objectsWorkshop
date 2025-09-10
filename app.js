console.log("Halo Whirled!");

const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
};

console.log(person);

console.table(person);

console.log(person.name); // Output: Bob

console.log(person.age); // Output: 30

console.log(person.favouriteColour); // Output: red

person.favouriteFood = "pizza";

console.log(person.favouriteFood); // Output: pizza

console.table(person);

const car = {
  make: "Ford",
  model: "Mustang",
  colour: "black with crimson stipes",
};

const carDetails = `A ${car.colour} ${car.make} ${car.model}`;

console.table(car);
console.log(carDetails);

const book = {
  title: Something,
};
