/*// Pointer 1: Primitive Datatypes
N : null
N : Number
S : String
S : Symbol
B : Boolean
B : BigInt
U : undefined */

let a = null;
let b = 527; //It could be floating point as well, having range is -(2^53 - 1) to (2^53 - 1)
let c = "Eso";
let d = Symbol("A symbol type");
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
