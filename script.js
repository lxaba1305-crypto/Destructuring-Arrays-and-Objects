// Activity: Destructuring Practice — What Your Code Should Do
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

const { make, model, year } = car

console.log(make) // Output: "Toyota"
console.log(model) // Output: "Camry"
console.log(year) // Output: 2020

const colors = ["red"];

const [
    primaryColor,
    secondaryColor = "green",
    tertiaryColor = "blue"
] = colors;

console.log(primaryColor); // Output: "red"
console.log(secondaryColor); // Output: "green"
console.log(tertiaryColor); // Output: "blue"

//Additional Practice — Nested Object Destructuring

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