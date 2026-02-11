// Activity: Destructuring Practice
const fruits = ["apple", "banana", "cherry"]

const [firstFruit, secondFruit, thirdFruit] = fruits

console.log(firstFruit) // Output: "apple"
console.log(secondFruit) // Output: "banana"
console.log(thirdFruit) // Output: "cherry"

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020
}

const { make: carMake, model: carModel, year: carYear } = car;

console.log(carMake);
console.log(carModel);
console.log(carYear);

const colors = ["red"];

const [
    primaryColor,
    secondaryColor = "green",
    tertiaryColor = "blue"
] = colors;

console.log(primaryColor); // Output: "red"
console.log(secondaryColor); // Output: "green"
console.log(tertiaryColor); // Output: "blue"



const user = {
  name: "Blessing",
  age: 19,
  address: {
    city: "Johannesburg",
    zip: "2001"
  }
};

const {
  name: userName,
  age: userAge,
  address: {
    city: userCity,
    zip: userZip
  }
} = user;

console.log(userName);
console.log(userAge);
console.log(userCity);
console.log(userZip);

const person = {
  name: "Alex"
};

const {
  name: personName,
  age: personAge = 25
} = person;

console.log(personName);
console.log(personAge);

const numbers = [1, [2, 3], 4];

const [first, [second, third], fourth] = numbers;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

// Additional Practice — Destructuring in Function Parameters

function displayBook({ title, author, year }) {
  console.log(`${title} by ${author}, published in ${year}`);
}

const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  year: 1937
};

displayBook(book);