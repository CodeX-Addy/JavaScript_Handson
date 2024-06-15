// Pointer 1: Dynamically typed
let a = 8;
//console.log(a); // 8
a = "Eso";
//console.log(a); // Eso

// Pointer 2: var is globally, while let is locally scoped
//Nowadays only let is widely used 
var b = 10;
var b = 20; //var can be redeclared while let don't
//console.log(b); // 20

{
    let a = 20;
    var b = 40;
    console.log(a); //20
    console.log(b); //40

}

console.log(a); //Eso
console.log(b); //40

//Pointer 3: const
const x = "Esoteric";
//x = "Eso"; //Error: Assignment to constant variable.
console.log(x); //Esoteric