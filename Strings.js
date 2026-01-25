//String is immutable in js, whatever functions i've performed below, they will return a new string as result type

let a = "Esoteric";
console.log(a.length);

//Template literal

let n1 = "Rahul";
let n2 = "Aakash";

console.log(`${n1} is a friend of ${n2}`)

//Escape seq characters

let f = "Aditya \nTomar";
console.log(f);
// Output:
// Aditya
// Tomar

// We can use the strings with backticks as well like

let name1 = `aditya
tomar`;

console.log(name1); // -> will print aditya and tomar in next line

//String Methods

let name = "Esoteric";
console.log(name.length); //Length
console.log(name.toUpperCase()); //Upper case
console.log(name.toLowerCase()); //Lower case
console.log(name.substring(2)); // oteric
console.log(name.slice(2, 5)); //Slicing
console.log(name.replace("Esoteric", "Esoterix")); //Replace
let n = " Guy";
console.log(name.concat(n)); //Concat

let m = " abn ";
console.log(m.trim()); //Trim

//Quick Practice: Extract 500 from given string "Credit Score is 500"
let str = "Credit Score is 500";
console.log(Number.parseInt(str.slice(16)));
