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
  title: `I, robot`,
  author: `Isaac Asimov`,
  numPages: 256,
  isbn13: 9780586025321,
  briefDesc: `The classic collection of robot stories from the master of the genre.In these stories Isaac Asimov creates the Three Laws of Robotics and ushers in the Robot Age`,
};

const bookDetails = `${book.title} by ${book.author}, ISBN13: ${book.isbn13}.\nBrief Summary: ${book.briefDesc}`;

console.log(bookDetails);

const blogPost = {
  title: "My first blog post",
  author: {
    name: "Bob",
    age: 30,
    favouriteColour: "red",
  },
  tags: ["coding", "javascript", "objects", "arrays"],
  content: "This is my blog post about learning objects and arrays.",
};
