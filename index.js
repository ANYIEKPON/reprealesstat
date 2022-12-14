// window.alert("i love pizza");

// let firstName = "Bro";
// let age = 12;

// console.log(firstName);
// console.log(age + 8);

// document.getElementById("p1").innerHTML = "Hello " + firstName;
// document.getElementById("p2").innerHTML = "you are " + age + " years old";
// let userName;
// document.getElementById("myButton").onclick = () => {
//   userName = document.getElementById("customer-name").value;
//   console.log(userName);
//   document.getElementById("head").innerHTML = "hello " + userName;
// };

// let age = window.prompt("How old are you");
// age = Number(age);
// age += 1;

// console.log("Happy Birthday you are " + age + " old");

// let x;
// let y;
// let z;

// x = Number("pizza");
// y = String(0);
// z = Boolean("yam");

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// let pi = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);
// circumference = 2 * pi * radius;

// console.log("the circumference is ", circumference);

// let x = 2.14;
// let y = 9;
// let z = 5;

// x = Math.round(x);
// x = Math.sqrt(x);
// x = Math.pow(x, 4);
// x = Math.abs(x); if x is a negative value
// x = Math.ceil(x);

// x = Math.max(x, y, z);
// x = Math.min(x, y, z);

// console.log(x);

// let a;
// let b;
// let c;

// a = window.prompt("Enter side a");
// a = Number(a);

// b = window.prompt("Enter side b");
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

// console.log(c);

// document.getElementById("submit").onclick = () => {
//   a = document.getElementById("aTextBox").value;
//   a = Number(a);

//   b = document.getElementById("bTextBox").value;
//   b = Number(b);

//   c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

//   document.getElementById("cLabel").innerHTML = "C is now " + c;
// };

// let count = 0;

// document.getElementById("decreasebtn").onclick = () => {
//   count -= 1;
//   document.getElementById("countLabel").innerHTML = count;
// };

// document.getElementById("resetbtn").onclick = () => {
//   count = 0;
//   document.getElementById("countLabel").innerHTML = count;
// };

// document.getElementById("increasebtn").onclick = () => {
//   count += 1;
//   document.getElementById("countLabel").innerHTML = count;
// };

// let x;
// let y;
// let z;

// document.getElementById("rollButton").onclick = () => {
//   x = Math.floor(Math.random() * 6) + 1;
//   y = Math.floor(Math.random() * 6) + 1;
//   z = Math.floor(Math.random() * 6) + 1;

//   document.getElementById("xlabel").innerHTML = x;
//   document.getElementById("ylabel").innerHTML = y;
//   document.getElementById("zlabel").innerHTML = z;
// };

// let username = " Bro code ";
// let phoneNumber = "123-458-345";

// username = username.toUpperCase();
// username = username.trim();
// username = username.charAt(2);
// username = username.toLowerCase();

// phoneNumber = phoneNumber.replaceAll("-", "/");

// console.log(phoneNumber);

// let fullName = "Bro Code";
// let firstName;
// let lastName;
// firstName = fullName.slice(0, fullName.indexOf(" "));
// lastName = fullName.slice(fullName.indexOf(" ") + 1);

// // lastName = fullName.indexOf(" ");

// console.log(firstName);
// console.log(lastName);

// let userName = "bro";

// let letter = userName.charAt(0).toUpperCase();

// console.log(letter);

// let age = -8;

// if (age >= 18) {
//   console.log("You are an adult");
// } else if (age < 0) {
//   console.log("Dem never born you");
// } else {
//   console.log("You are a child");
// }

// let online = false;

// if (online) {
//   console.log("you are online");
// } else {
//   console.log("you are offline");
// }

// const myCheckbox = document.getElementById("mycheckbox");

// document.getElementById("myButton").onclick = () => {
//   if (myCheckbox.checked == true) {
//     console.log("You are Logged In");
//   } else {
//     console.log("You are not Logged in");
//   }
// };

// let grade = 30;

// switch (false) {
//   case grade >= 60:
//     console.log("You did great");
//     break;
//   case grade >= 50:
//     console.log("You did good");
//     break;
//   case grade >= 40:
//     console.log("You did okay");
//     break;
//   default:
//     console.log(grade, " is not a letter grade!");
// }

// let temp = -15;
// let sunny = false;

// if (temp > 0) {
//   console.log("its cold outside");
// } else {
//   console.log("its warm outside");
// }

// if (!sunny) {
//   console.log("its sunny outside");
// } else {
//   console.log("its cloudy outside");
// }

// let userName = "";

// while (userName == "" || userName == null) {
//   userName = window.prompt("Enter your Username");
// }

// console.log(userName);

// let userName;

// do {
//   userName = window.prompt("Enter your user name");
// } while (userName == "");

// console.log("Hello", userName);

// for (let i = 10; i > 0; i -= 1) {
//   console.log(i);
// }

// console.log("Happy New Year");
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// for (let i = 0; i < 20; i++) {
//   if (i == 13) {
//     continue;
//     break;
//   }
//   console.log(i);
// }

// for (let i = 0; i <= 4; i++) {
//   for (let j = 0; j <= 3; j++) {
//     console.log(j);
//   }
// }

// let symbol = window.prompt("Enter a symbol to use");
// let rows = window.prompt("Enter # of rows");
// let columns = window.prompt("Enter # of columns");

// for (let i = 1; i <= rows; i++) {
//   for (let i = 1; i <= columns; i++) {
//     document.getElementById("myRectangle").innerHTML += symbol;
//   }
//   document.getElementById("myRectangle").innerHTML += "<br>";
// }
// let area;
// let width;
// let height;

// width = window.prompt("Enter width");
// height = window.prompt("Enter height");

// const getArea = (width, height) => {
//   return width * height;
// };

// area = getArea(width, height);
// console.log("the area is: ", area);

// let adult;

// const checkAge = (a) => {
//   if (a >= 18) {
//     return true;
//   } else {
//     false;
//   }
// };

// const checkAge = (b) => {
//   return b >= 18 ? true : false;
// };

// adult = checkAge(13);
// console.log(adult);

// const answer = Math.floor(Math.random() * 10 + 1);

// let guesses = 0;
// document.getElementById("submitButton").onclick = () => {
//   let guess = document.getElementById("guessField").value;
//   guesses += 1;

//   if (guess == answer) {
//     alert(`${answer} is the #, it took you ${guesses} guesses`);
//   } else if (guess < answer) {
//     alert("Too small");
//   } else {
//     alert("Too large");
//   }
// };

// const toCelsius = (temp) => {
//   return (temp - 32) * (5 / 9);
// };

// const toFahrenheit = (temp) => {
//   return (temp * 9) / 5 + 32;
// };

// document.getElementById("submitButton").onclick = () => {
//   let number = document.getElementById("tempNum").value;
//   number = Number(number);

//   if (document.getElementById("cButton").checked) {
//     let answer = toCelsius(number);
//     document.getElementById("tempLabel").innerHTML = answer;
//   } else if (document.getElementById("fButton").checked) {
//     let answer = toFahrenheit(number);
//     document.getElementById("tempLabel").innerHTML = answer;
//   } else {
//     document.getElementById("tempLabel").innerHTML =
//       "You have not selected any";
//   }
// };

// let prices = [5, 10, 15, 20, 25, 30];

// for (let i = prices.length - 1; i >= 0; i--) {
//   const element = prices[i];
//   console.log(element);
// }

// for (price of prices) {
// console.log(price);
// }

// let fruits = ["banana", "mango", "apple", "date"];
// fruits = fruits.sort().reverse();
// for (let fruit of fruits) {
//   console.log(fruit);
// }

// 2D array = An array of arrays
// let fruits = ["apple", "oranges", "banana"];
// let vegetables = ["carrots", "onions", "potatoes"];
// let meats = ["eggs", "chicken", "fish"];

// let groceryList = [fruits, vegetables, meats];
// groceryList[0][1] = "cocumber";

// for (let list of groceryList) {
//   for (let food of list) {
//     console.log(food);
//   }
// }

// spread operator = allows an iterable such as an array or string to be expanded in places                  where zero or more arguments are expected (unpacks theelements);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = Math.max(...numbers);

// console.log(result);

// let class1 = ["Spongebob", "Patrick", "Sandy"];
// let class2 = ["Squidward", "Mr.Krabs", "Plankton"];

// class1.push(...class2);

// console.log(...class1);

// rest parameters = represent an indefinite number of parameters (packs arguments into an array)
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// const sum = (...numbers) => {
//   let total = 0;
//   let x;
//   let y;
//   for (let number of numbers) {
//     total += number;
//   }
//   return total;
// };
// console.log(sum(a, b, c, d, e));

// let rows = window.prompt("Enter # of rows");
// let columns = window.prompt("Enter # of columns");

// for (let i = 1; i <= rows; i++) {
//   for (let j = 1; j <= columns; j++) {
//     document.getElementById("myRectangle").innerHTML += j;
//   }
//   document.getElementById("myRectangle").innerHTML += "<br>";
// }

// const answer = Math.floor(Math.random() * 10 + 1);

// let guesses = 0;

// document.getElementById("submitButton").onclick = function () {
//   let guess = document.getElementById("guessField").value;
//   guesses += 1;

//   if (guess == answer) {
//     alert(`${answer} is the #, it took you ${guesses} guess`);
//   } else if (guess < answer) {
//     alert("Too small");
//   } else {
//     alert("Too large");
//   }
// };

// let fruits = ["apples", "oranges", "bananas"];
// let vegetables = ["carrots", "onions", "potatoes"];
// let meats = ["eggs", "chicken", "fish"];

// let groceryList = [fruits, vegetables, meats];

// groceryList[0][1] = "spinach";
// for (let list of groceryList) {
//   for (let food of list) {
//     console.log(food);
//   }
// }

// let fruits = ["apples", "oranges", "bananas"];
// let vegetables = ["carrots", "onions", "potatoes"];
// let meats = ["eggs", "chicken", "fish"];

// let groceryList = [fruits, vegetables, meats];

// let list = "";
// for (let i = 0; i < groceryList.length; i++) {
//   let num = list.indexOf(groceryList[i]);
//   list = groceryList[i];
//   console.log(list);
//   console.log(num);
// }

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// function sum(...numbers) {
//   let total = 0;
//   for (const number of numbers) {
//     total += number;
//   }
//   return total;
// }
// console.log(sum(a, b, c));

// function sum(x, y) {
//   let result = x + y;
//   return result;
// }

// function displayConsole(output) {
//   console.log(output);
// }

// function displayDom(output) {
//   document.getElementById("myLabel").innerHTML = output;
// }

// let total = sum(2, 3);
// displayDom(total);

// function sum(x, y, callback) {
//   let result = x + y;
//   let ans = callback(result);
//   return ans;
// }

// function displayConsole(output) {
//   console.log(output);
// }

// function displayDom(output) {
//   document.getElementById("myLabel").innerHTML = output;
// }

// let total = sum(2, 8, displayConsole);

// let students = ["spongebob", "patrick", "squidward"];

// function capitalize(element, index, array) {
//   array[index] = element[0].toUpperCase() + element.substring(1);
// }

// function print(element) {
//   console.log(element);
// }

// students.forEach(capitalize);
// students.forEach(print);
// console.log(students[0]);

// let numbers = [1, 2, 3, 4, 5];

// function sqare(element) {
//   return Math.pow(element, 2);
// }

// function print(element) {
//   console.log(element);
// }
// let squares = numbers.map(sqare);
// squares.forEach(print);

// console.log(squares);

// let ages = [18, 16, 21, 17, 19, 90];

// function checkAge(element) {
//   return element >= 18;
// }

// function print(element) {
//   console.log(element);
// }

// let adult = ages.filter(checkAge);
// console.log(adult);

// adult.forEach(print);

//  reduce method;
// let prices = [5, 10, 15, 20, 25, 30];

// function checkOut(total, element) {
//   return total + element;
// }

// let total = prices.reduce(checkOut);
// console.log(total);

// Sort() M<ethod
// let grades = [100, 50, 90, 60, 80, 70];

// function descendingSort(x, y) {
//   return y - x;
// }

// function ascendingSort(x, y) {
//   return x - y;
// }

// function print(element) {
//   console.log(element);
// }

// grades = grades.sort(ascendingSort);

// grades.forEach(print);
// console.log(grades);

// To create and Shuffle Cards

// let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// const shuffle = (array) => {
//   let currentIndex = array.length;

//   while (currentIndex !== 0) {
//     let randomIndex = Math.floor(Math.random() * array.length);
//     currentIndex -= 1;

//     let temp = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temp;
//   }

//   return array;
// };

// shuffle(cards);

// console.log(cards);

// cards.forEach(card => console.log(card));

// Nested Functions

// let userName = "King";
// let userInbox = 0;

// function login() {
//   displayUsername();
//   displayUserInbox();

//   function displayUsername() {
//     console.log(`welcome ${userName}`);
//   }

//   function displayUserInbox() {
//     console.log(`you have ${userInbox} new messages`);
//   }
// }

// login();

// Map

// const store = new Map([
//   ["t-shirt", 20],
//   ["jeans", 30],
//   ["socks", 10],
//   ["underwear", 50],
// ]);

// store.set("hat", 40);
// store.delete("hat");
// store.forEach((value, key) => console.log(`${key} $${value}`));

// console.log(store.has("underwear"));
// console.log(store.has);

// let shoppingCart = 0;

// shoppingCart += store.get("t-shirt");
// shoppingCart += store.get("underwear");
// console.log(shoppingCart);

// This Keyword
// const car1 = {
//   model: "Mustang",
//   color: "red",
//   year: 2023,

//   drive: function () {
//     console.log(`You drive the ${this.model}`);
//   },
// };

// const car2 = {
//   model: "Corvette",
//   color: "blue",
//   year: 2024,

//   drive: function () {
//     console.log(`You drive the ${this.model}`);
//   },
// };

// car1.drive();
// car2.drive();

// Class

// class Player {
//   score = 0;

//   pause() {
//     console.log("You paused the game");
//   }

//   exit() {
//     console.log("You exited the game");
//   }
// }

// const player1 = new Player();

// player1.score += 1;

// console.log(player1.score);
// player1.exit();

// Contructor

// class Student {
//   constructor(name, age, gpa) {
//     this.name = name;
//     this.age = age;
//     this.gpa = gpa;
//   }

//   study() {
//     console.log(`${this.name} is studying`);
//   }
// }

// const student1 = new Student("SpongeBob", 30, 3.2);
// const student2 = new Student("SpongeBob", 30, 3.2);
// const student3 = new Student("SpongeBob", 30, 3.2);

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);
// student1.study();

// class Car {
//   static numberOfCars = 0;
//   constructor(model) {
//     this.model = model;
//     Car.numberOfCars += 1;
//   }
// }

// const car1 = new Car("Golf");
// const car2 = new Car("Mustang");
// const car3 = new Car("Nissan");
// const car4 = new Car("Honda");

// console.log(Car.numberOfCars);

// Inheritance

// class Animal {
//   alive = true;

//   eat() {
//     console.log(`This ${this.name} is eating`);
//   }

//   sleep() {
//     console.log(`This ${this.name} is sleeping`);
//   }
// }

// class Rabbit extends Animal {
//   name = "Rabit";

//   run() {
//     console.log(`This ${this.name} is running`);
//   }
// }

// class Fish extends Animal {
//   name = "Fish";

//   swim() {
//     console.log(`This ${this.name} is swimming`);
//   }
// }

// class Hawk extends Animal {
//   name = "Hawk";

//   run() {
//     console.log(`This ${this.name} is flying`);
//   }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(fish.alive);

// super

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }
// }

// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }
// }

// class Hawk extends Animal {
//   constructor(name, age, flySpeed) {
//     super(name, age);
//     this.flySpeed = flySpeed;
//   }
// }

// const rabbit = new Rabbit("rabbit", 1, 40);
// const fish = new Fish("fish", 2, 80);
// const hawk = new Hawk("hawk", 3, 150);

// console.log(fish.name);
// console.log(fish.age);
// console.log(fish.swimSpeed);

// getters
