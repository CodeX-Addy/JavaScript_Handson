// Pointer 1: Dynamically typed

let a = 8;
// console.log(a); -> 8
a = "Adi";
// console.log(a); -> Adi

// Pointer 2: var is globally, while let is locally scoped
// if var is defined at outside any function, then it'll will be globally available
// Using let is a good practice

var b = 10;
var b = 20; //var can be redeclared while let don't
// console.log(b); -> 20

{
    let a = 20;
    var b = 40;
    console.log(a); //-> 20
    console.log(b); //-> 40

}

console.log(a); //Adi
console.log(b); //40

//Pointer 3: const

const x = "Esoteric";
//x = "Eso"; //Error: Assignment to constant variable.
console.log(x); //Esoteric
