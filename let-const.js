console.log(a); //We'll get an error since we're trying to access 'a' before initializing, and here the Temporal Dead Zone for 'a' will starts

//Temporal Dead Zone : It is a phase b/w hoisting a variable till the declaration

//Hoisting means to declare variables undefined by the JS engine before initializing that means the memory for the variables will be allocated, if it is used before declaration/initialization

console.log(b); //It will not throw any error rather returns undefined, since b with var declaration will be allocated in different memory space (which is global)

let a = 10;
var b = 100;

//With the var declaration of b, we can access it via window object in console since var declaration will be global

//In case of let & const variables, there will be a separate memory declaration

//On global level, 'this' keyword is equivalent to the window object which means
//this.b will gives 100 but this.a will gives undefined

// We can't redeclare the variable having same name defined with let, but it is possible with var
let c = 5;
let c = 10; //It will throw a syntax error since we're trying to redeclare 'c'

//Difference b/w let & const
let d;
d = 10; //This is totally fine

const e;
e = 1000; // It will give us syntax error, we've to initialize the const during declaration

// Block scope
// let & const are block scoped, var is function scoped
{
    var a = 100;
    let b = 200;
    const c = 300;
}
//Here we can access 'a' but not 'b' & 'c' since they are let & const variables