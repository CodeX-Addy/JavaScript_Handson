console.log(a); //We'll get an error since we're trying to access 'a' before initializing, and here the Temporal Dead Zone for 'a' will starts

//Temporal Dead Zone : It is a phase b/w hoisting a variable till the declaration

//Hoisting means to declare variables undefined by the JS engine before initializing

console.log(b); //It will not throw any error rather returns undefined, since b with var declaration will be allocated in different memory space (which is global)

let a = 10;
var b = 100;