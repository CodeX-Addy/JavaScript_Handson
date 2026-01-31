// Major changes have introduced in functions after ECMAScript 6

function greetings(name){
    console.log(`Hello ${name}`)
}

greetings("Coders")

// Taking an example of averaging function in order to understand the syntax
function avg(x, y){
    return (x + y) / 2;
}

console.log("Average of 2 and 3 is : ", avg(2,3));

// ---------------------------------------------------------------------------
// FUNCTION DECLARATION AS A VARIABLE
// ---------------------------------------------------------------------------

const multiplication = function(a, b){
    return a * b;
}

let ans = multiplication(2,3);
console.log(ans);

// ---------------------------------------------------------------------------
// ARROW FUNCTIONS
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// PASSING FUNCTION AS A VARIABLE
// ---------------------------------------------------------------------------

function greet(){
    console.log("Greeting from my side..");
}

function greetMe(greet){
    console.log("Hi" + ' ' + "Addy");
    greet();
}

greetMe(greet);

// ---------------------------------------------------------------------------
// FUNCTION CAN BE RETURNED FROM ANOTHER FUNCTION
// ---------------------------------------------------------------------------

function solve(){
    return function square(number){
        return number * number;
    }
}

let ans = solve();
let finalAns = ans(10);
console.log(finalAns);

// ---------------------------------------------------------------------------
// PASSING FUNCTION IN AN ARRAY
// ---------------------------------------------------------------------------

const arr = [

function (a, b){
    return a + b;
}, 

function (a, b){
    return a - b;
}
    
]

let add_function = arr[0];
console.log(add_function(12, 11));
