//Major changes in functions after ECMAScript 6

function greetings(name){
    console.log(`Hello ${name}`)
}

greetings("Coders")

//Taking an example of averaging function in order to understand the syntax
function avg(x, y){
    return (x + y) / 2;
}

console.log("Average of 2 and 3 is : ", avg(2,3));

// We can also assign functions as a variable as below:

const multiplication = function(a, b){
    return a * b;
}

let ans = multiplication(2,3);
console.log(ans);

// Arrow function --> mostly used

const multiplication = (a, b) => {
    return a * b;
}

let ans = multiplication(2, 3)
console.log(ans);

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

// Passing function as a variable

function greet(){
    console.log("Greeting from my side..");
}

function greetMe(greet){
    console.log("Hi" + ' ' + "Addy");
    greet();
}

greetMe(greet);


