//String is immutable in js, whatever functions i've performed in below, they all return new string

let a = "Esoteric";
console.log(a.length);

//Template literal

let n1 = "John";
let n2 = "Doe";

console.log(`${n1} is a friend of ${n2}`)

//Escape seq characters

let f = "John \nDoe";
console.log(f);

//String Methods

let name = "Esoteric";
console.log(name.length); //Length
console.log(name.toUpperCase()); //Upper case
console.log(name.toLowerCase()); //Lower case
console.log(name.slice(2, 5)); //Slicing
console.log(name.replace("Esoteric", "Esoterix")); //Replace
let n = " Guy";
console.log(name.concat(n)); //Concat

let m = " abn ";
console.log(m.trim()); //Trim
