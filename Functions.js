//Major changes in functions after ECMAScript 6
//Taking an example of averaging function in order to understand the syntax
function avg(x, y){
    return (x + y) / 2;
}

console.log("Average of 2 and 3 is : ", avg(2,3));

//Arrow function --> mostly used
const average = (x, y) => {
    return (x+y)/2;
}

console.log("Average of 4 and 5 is : ", average(4,5));

// Function Statement aka Function Declaration
function a(){
    console.log("a called..");
}
a();

//Function Expression
var b = function(){
    console.log("b called");
}
b();

//The basic difference b/w func statement & expression is "Hoisting", means we can access/call a() before statement as JS engine will reserves memory space for it, but in case of expression b() will leads to be undefined and will throw a reference error 

//Anonymous functions --> A function without any name
//function (){} --> it will give us an error since these functions are ideal when we've to use it as a value

//Named function expression
//Similar like function expression, but instead of dec anonymous as a value, it will give a name to it as
var c = function d(){
    console.log("d called");
}

//But corner case here is that, we cannot call d() directly, as it will give us a reference error

//First class functions
//A function can be treated as a variable, it can be passed as an argument to another function
//it can be returned from a function

