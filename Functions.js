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

// Function Statement
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