/*// Pointer 1: Primitive Datatypes
N : null
N : Number
S : String
S : Symbol
B : Boolean
B : BigInt
U : undefined */

let a = null;

//It could be floating point as well, having range is -(2^53 - 1) to (2^53 - 1)
let b = 527; 

let c = "Eso";

// Note, it is has reference identity, means we cannot create same symbol type twice
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");

Symbol("foo") === Symbol("foo"); // false

let e = true;
let f = BigInt("528"); // If we need larger numbers than Number's range
let g;
console.log(a,b,c,d,e,f,g);
console.log(typeof a,typeof b,typeof c,typeof d,typeof e,typeof f, typeof g);

// Pointer 2: Non-Primitive Datatype : Objects
let obj = {
    Name: "Aditya",
    Age: 20
}
console.log(obj["Name"])
