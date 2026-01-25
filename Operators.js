//We'll cover here some new things in operators as most of the functionalities is more or less similar to other programming languages

//Arithmetic operators
let a = 45;
let b = 4;
console.log(a + b);
console.log(a - b);
console.log(a / b); //It will give exact value in decimals unlike other languages that rounded off to 11
console.log(a * b);
console.log(a ** b);
console.log(a % b);

//Comparison operators
let c = "6";
let d = 6;
console.log(c == d); //true
console.log(c != d); //false
console.log(c === d); //false //it checks the comparison + type
console.log(c !== d); //true

//Logical operators
let x = 5;
let y = 10;

console.log(x < y && x == 5);
console.log(x < y || x == 5);
console.log(!false);


// More examples for strict equality vs loose equality

const num = 0;
const big = 0n;
const str = "0";
const obj = new String("0");

console.log(num == str); // true
console.log(big == num); // true
console.log(str == big); // true

console.log(num == obj); // true
console.log(big == obj); // true
console.log(str == obj); // true


const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
