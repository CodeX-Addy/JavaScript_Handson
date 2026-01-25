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

// If we need larger numbers than Number's range
let f = BigInt("528"); 

//Undefined
let g;

console.log(a,b,c,sym1,e,f,g);
console.log(typeof a,typeof b,typeof c,typeof d,typeof e,typeof f, typeof g);

// Pointer 2: Non-Primitive Datatype (Reference types) : Objects, Arrays, Functions -> their actual values stores in heap memory, and reference will be on stack 
let obj = {
    Name: "Aditya",
    Age: 20
}
console.log(obj["Name"])

let obj = {
    printName: function print(name){
        console.log(`${name}`);
    }
}

obj.printName("aditya")

// From above example, obj stores in stack memory as reference, whereas, the values will be store in heap memory 
