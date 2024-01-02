/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring for you to use we didn't do in class yet. That's on purpose, if you need assistance look back in lessons, and of course Google. :)

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
let avar;

// 2.) Change the value of this variable
avar = 3;

// 3.) Change the data type of this variable
let cvar = String(avar);

// 4.) Create another variable and the one from above to concatenate
let bvar = 5;
let newVar = cvar + bvar;
console.log("concatenated variables", newVar);
// 5.) Use any of the variables above or create new ones and print using string interpolation
console.log("print with interpolation", `${cvar} + ${bvar} is`, newVar);
// ================ Variable Names =================
/* 
    • Case-sensitive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina

let indexOfI = "Sabrina".indexOf("i");
console.log("using charAt", "Sabrina".charAt(indexOfI));
// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
/* Unicode:  an international encoding standard for use with different languages and scripts, by which each letter, digit, or symbol is assigned a unique numeric value that applies across different platforms and programs. */
console.log("using charCodeAt", "Teddy".charCodeAt(2));

// Using fromCharCode() - make it readable for us :). You'll see!
console.log(
  "Using ASCII to create a string",
  String.fromCharCode(84, 101, 100, 100, 121),
);
// Take your first and last name and concat() concat for arrays & strings
console.log("concat my first and last names", "Deb".concat(" Prentice"));
// Create a string and make it return true using startsWith()
let str = "Happy Holidays peeps";
if (str.startsWith("H")) {
  console.log("print only if string starts with H", str);
}

// Now use any variable with endsWith() and return false
if (str.endsWith("Z")) {
  console.log(str);
} else {
  console.log("string does not end with Z", false);
}
// Finish the following sentence. Use includes() and return true.includes for arrays
const ozgur =
  "Once upon a time Ozgur looked up at the Moon, and thot he taw a wabbit";
let arr = ozgur.split(" ");
if (
  arr.includes(
    "Once",
    "upon",
    "a",
    "time",
    "Ozgur",
    "looked",
    "up",
    "at",
    "the",
    "Moon",
  )
) {
  console.log("ozgur sentence includes all the chosen words", true);
}

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
const joshHadALittleLambOopsCow =
  "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone.";

const indexOfCow = joshHadALittleLambOopsCow.indexOf("cow");
console.log("find the index of 'cow': ", indexOfCow);
// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.

const vanessa =
  "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace.";

console.log("last indexOf Vanessa: ", vanessa.lastIndexOf("Vanessa"));

// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?";
console.log("can we use length for strings?", noWeCantTeo.length);
// If only it was this easy to replace() my ex. Totally not joking, LOL. JK.  [replaceAll]
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!";
console.log(
  "replace Goku with Vegeta: ",
  replaceGokuWithVegeta.replace("Goku", "Vegeta"),
);
// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'.
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4";
joshIsLookingForWifey.search("wifey")

//Method 1 uses slice
let sliced = joshIsLookingForWifey.slice(
  joshIsLookingForWifey.indexOf("wifey"),
  joshIsLookingForWifey.indexOf(2) + 1,
);
console.log("Josh's wifey using indexOf & slice: ", sliced);

//Method 2 using search(): returns the position of the first match
const firstPositionOfWifey = [joshIsLookingForWifey.search("wifey")];
let search = joshIsLookingForWifey.slice(
  joshIsLookingForWifey.search("wifey"),
  joshIsLookingForWifey.indexOf(2) + 1,
);
console.log("Josh's wifey using search & slice: ", search);

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
const pizzaSentence = "pizza, other half of pizza";
let slicedPizza = pizzaSentence.slice(pizzaSentence.indexOf("o"));
console.log("slicing up the pizza: ", slicedPizza);

// Now using the pizza sentence, return only pizza (before the comma)
let firstIndexOfComma = pizzaSentence.indexOf(",");
let firstSliceOfPizza = pizzaSentence.slice(0, firstIndexOfComma);
console.log("The first pizza: ", firstSliceOfPizza);

// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn";
const cheapSkates = splitTheBill.split(",");
console.log("cheap friends: ", cheapSkates);

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.
const splitTheCheapSkates = splitTheBill.split("");
console.log("split the cheapskates", splitTheCheapSkates);
// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS.";
console.log("lower the voice:", angry.toLowerCase());
// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out.
const angryTuan = "YO MAN, WHAT'S THE BIG DEAL?";
console.log("tell Tuan to chill: ", angryTuan.toLowerCase());
// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun";
console.log(
  "respect Jahlun: ",
  jahlunSaidToPutSomeRespectToHisName.toUpperCase(),
);

// substring()
// on the chopping block...

// Returns "ell"
const basicGreeting = "Hello World";
let indexOfE = basicGreeting.indexOf("e");
let searchForFirstL = basicGreeting.indexOf("l") + 1;
let searchForSecondL = basicGreeting.indexOf("l") + 2;
let slicedEll = basicGreeting.slice(indexOfE, searchForSecondL);
console.log("returns ell:", slicedEll);

// Returns "JavaScript"
const ohReally = "JavaScript Substring";
const space = ohReally.indexOf(" ");
const slicedJS = ohReally.slice(0, space);
console.log("Sliced JavaScript: ", slicedJS);

// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com";
const startStr = aslDays.search("aol.com");
const endStr = aslDays.lastIndexOf("m");
console.log("cut out aol.com:", aslDays.slice(startStr, endStr + 1));

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
const loveMeDo = "          Thanks a lot folks         ";
console.log("trim the handles: ", loveMeDo.trim());

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true.
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke";

console.log(a < b);
console.log(c > b);
console.log(d === d);
console.log(d.length < a);
console.log(a < 15);
console.log(a < b < c);
console.log(c > b > a !== d);

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
for (let k = 0; k < 10; k++) {
  console.log("I'm spinning oh I'm spinning!");
}

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
for (let t = 0; t < 20; t++) {
  console.log("I can't see right y'all");
}
// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
for (let t = 0; t < 20; t++) {
  while (t < 20) {
    console.log("I can't see right y'all");
    console.log("I'm sorry!!");
    t++;
  }
}
// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :)

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: "shoes",
  thing2: "clothes",
  thing3: "gaming console",
};
for (item in whateverQueenBeySaid) {
  console.log(whateverQueenBeySaid[item]);
}

// Using (FOR IN LOOP), print the indexes of the array.
const lana = ["l", "a", "n", "a"];
for (let char in lana) {
  console.log(char);
}

// USE (FOR OF LOOP)!
const tia = ["teo", "the", "syntax", "of", "this", "is", "cleaner"];
for (let word of tia) {
  console.log(word);
}

// Look into forEach() loop, it accepts a callback aka a function inside a function.
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable.
const perscholas = ["Amira", "Arely", "Jonathan"];
perscholas.forEach((person) => {
  return console.log(person);
});

// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do
// push() Add to the end of the array
// pop() Remove from the end of the array
// unshift() Add to the start of the array, then returns the number of items in the array
// shift() Remove from the start of the array, and returns it
// concat() Join arrays/strings together, copy array/string, you can also join arrays together with the spread operator
// splice() cut from/add to a string Affects the original array/string -- A destructive action, returned the removed item as an array, returns empty array when you're just adding values
// slice() shallow copy a string/array, cuts parts of a string & returns it does not modify the original
// sort() Destructive - sorts in place returns reference to the same array - now sorted; sort strings using localeCompare
// includes() only for arrays!!  if item is part of an array
// indexOf() reads the length property and then finds the positive position of each element, returning the position of the first occurrence, or -1 if it doesn't exist
// length for string or array
//split()  We can split() or use the spread operator to split a string by doing [...pizza] give ["p", "i"] etc.

const fruits = ["apple", "banana", "orange"];

// Print banana
console.log(fruits[1]);

// Let's turn it up a notch. I won't tell you what array methods to use.

// Join all the elements of the array into a string separated by a space.
console.log(fruits.join(" "));
// Remove orange
console.log(
  "splice returns the deleted values as an array: ",
  fruits.splice(2, 1),
);
console.log(fruits);
// Add strawberry, kiwi, and grapes at the end
console.log(
  "splice returns an empty array if nothing was deleted: ",
  fruits.splice(2, 1, "Kiwi", "Strawberry", "Grapes"),
);
console.log("add fruits to the end: ", fruits);
// Remove apple
console.log(fruits.shift());
console.log("remove apple from the start: ", fruits);
// Add mango at the beginning of the array
console.log(fruits.unshift("mango"));
console.log("add mango to the start", fruits);
// Add lemon, and grapefruit between mango and banana
console.log(
  "splice returns empty array if nothing deleted: ",
  fruits.splice(1, 0, "lemon", "grapefruit"),
);
console.log("add mango and banana: ", fruits);
// Remove banana and strawberry
console.log(fruits.splice(3, 1));
console.log("remove banana: ", fruits);
console.log("remove strawberry: ", fruits.splice(4, 1));
console.log(fruits);
// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.
const exoticFruits = ["guava", "wax apple", "golden apple"];
const exoticFruitsPlusFruits = fruits.concat(exoticFruits);
console.log("a concatenated array: ", exoticFruitsPlusFruits);
// Print the last two exotic fruits without altering the newly concatenated array.
console.log("a sliced array: ", exoticFruitsPlusFruits.slice(-2));
// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"];
const sortedArr = monalissaIsMessy.sort();
console.log("a sorted array: ", sortedArr);
// Kevin accidentally stepped into the mirror world and needs help reversing his words. Array method.  Reverses in place like sort
const mirrorMirrorOnTheWall = [
  "all",
  "them",
  "of",
  "greatest",
  "the",
  "is",
  "who",
];
let reversed = mirrorMirrorOnTheWall.reverse();
console.log("a reversed array: ", reversed);
// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :)
const RafaelNoBadWords =
  "I am so tired of this badword food. I do not want this badword badword food.";
let filteredArr = RafaelNoBadWords.split(" ").filter(
  (value) => value !== "badword",
);
console.log("a filtered array that was joined: ", filteredArr.join(" "));

// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231];
const reducedArr = numbersToAddUp.reduce((curr, acc) => {
  return acc + curr;
});
console.log("a reduced array: ", reducedArr);

// ===== SPREAD OPERATOR =====

// Create a variable and assign a value of a copied array using the spread operator
const copiedArr = [...filteredArr];
console.log("A copied array", copiedArr);

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
const arr1 = copiedArr;
const arr2 = sortedArr;
let joinedArr = [...copiedArr, ...sortedArr];
console.log("array made with spread operator: ", joinedArr);

// Using the variable with the newly connected arrays, use spread operator to add something at the end.
const newJoinedArr = [...joinedArr, "Hallelujah", "Amen"];
console.log("add to the end: ", newJoinedArr);

// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.
const addToTheStart = ["oh dear me", ...newJoinedArr];
console.log("add to the start: ", addToTheStart);
// ===== ACCESS =====

// Donut Shopping
const donutShop = [
  ["firecracker", "chocolate", "blueberry"],
  [
    ["orange", "applecrumble"],
    ["cream", "peanutbutter", "coconut"],
  ],
  [[[[["flavor of the week"]], ["ihatethis"]]]],
];

// Anthony wants applecrumble. Print please!
console.log("Drilling into what Anthony wants: ", donutShop[1][0][1]);

function flattenData(arr) {
  let flattened = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened = flattened.concat(flattenData(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
}
let flatArr = flattenData(donutShop);
console.log("The flattened array: ", flatArr);

for (index in flatArr) {
  if (flatArr[index].includes("applecrumble")) {
    console.log(
      "Here is your donut",
      Number(index) + 1 + "th in line: ",
      flatArr[index],
    );
  } else if (flatArr[index].includes("ihatethis")) {
    console.log(
      "Here is your donut",
      Number(index) + 1 + "th in line: ",
      flatArr[index],
    );
  }
}

// Tosi wants ihatethis. :) Print!
console.log("Drilling into what Tosi wants: ", donutShop[2][0][0][1][0]);

for (let item of donutShop[2]) {
  item.forEach((thing1) => {
    console.log("looping into what Tosi wants: ", thing1[1].join());
  });
}
// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'
// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'

const teo = {
  type: "person",
  sex: "male",
  isHungry: true,
};

if (teo.type === "person") {
  console.log("Teo is a person!");
  if (teo.sex === "male") {
    console.log("You got it right!");
    if (teo.isHungry) {
      console.log("Let's buy Teo some Tacos!");
    } else if (!teo.isHungry) {
      console.log("He doesn't need to eat.");
    } else {
      console.log("If Teo is not hungry, am I hungry?");
    }
  } else {
    console.log("Wrong.  Teo is going to remove you from the class.");
  }
} else {
  console.log("Teo is not a person");
}

// Create an if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'
const gustavo = {
  feeling: "the coolest",
};

let text;
gustavo["feeling"] === "the coolest"
  ? (text = "You got that right!")
  : (text = "James wants to argue.  He says he's the best!");
console.log(text);
// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'
let sayGreeting = () => {
  console.log("Hello ma'amsir");
};
sayGreeting();

// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.
myStringFunction("playstation 5.  Don't touch it ever!!");
function myStringFunction(str) {
  console.log("This is my " + str);
}

// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.
add(10, 9, 8);
function add(...allTheParams) {
  let total = 0;
  for (const param of allTheParams) {
    total += param;
  }
  console.log("The total value is: ", total);
}

// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts
console.log(fightClub("Devin"));
function fightClub(name) {
  let text;
  switch (name) {
    case "Teo":
      text = "1st rule: You do not talk about Fight Club";
      break;
    case "Manara":
      text = "2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB";
      break;
    case "Liv":
      text =
        "3rd rule:  If someone yells 'Stop!', goes limp, taps out, the fight is over.";
      break;
    case "Devin":
      text = "4th rule: Only two guys to a fight";
      break;
    default:
      text = "No shirts";
      break;
  }
  return text;
}

// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.
function hello() {
  console.log("Inside the outer function: ", "Hello");
  return (() => {
    return "Goodbye";
  })();
}
console.log("Inside the inner function: ", hello());

// Create a function expression with your first name as the variable and then print your first and last name
let fullName = (firstName) => {
  return firstName + " Prentice";
};
console.log(
  "Concatenate a variable first name to my last name: ",
  fullName("Deb"),
);

// Create an arrow function that accepts a number and have it return that number doubled
let num = 5;
const double = (num) => {
  return 2 * num;
};
console.log(`The double of ${num} is: `, double(num));

// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location(home) property. Give the properties values.
const human = {
  name: "Godzilla",
  age: "2000",
  home: "Japan",
};

// Access the name using dot notation
console.log("The name: ", human.name);

// Access the age using square brackets
console.log("The age: ", human["age"]);
// Use object destructuring to access location
const { name, age, home } = human;
console.log("The location: ", home);

// ACCESS Granted
const bulbasaur = {
  name: "Bulbasaur",
  abilities: [
    {
      ability: "overgrow",
    },
    {
      ability: "chlorophyll",
    },
  ],
  moves: ["razor-wind", "swords-dance", "cut"],
  sound: function () {
    return "Bulbahhhh!!!!!";
  },
};

// Print overgrow
console.log("The overgrow value: ", bulbasaur["abilities"][0]["ability"]);

// Print cut
console.log("The cut value: ", bulbasaur["moves"][2]);

// Print Bulbahhhh!!!!!
console.log("The sound method: ", bulbasaur.sound());

// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
bulbasaur.height = 7;
console.log("Added a height property: ", bulbasaur);
// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
bulbasaur["order"] = 1;
console.log("Added an order property: ", bulbasaur);

// Print an array that contains every single property in bulbasaur
console.log("The array of properties: ", Object.keys(bulbasaur));

// Print every single property one by one in the console
Object.keys(bulbasaur).forEach((prop) => {
  console.log("The properties: ", prop);
});

// Print an array that contains every single value in bulbasaur
console.log("The array of values: ", Object.values(bulbasaur));
