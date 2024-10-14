//Callback function helps us to bring async nature in js
//Otherwise js is synchronous in nature
//Settimeout contains first argument as a callback function
setTimeout(function print(){
    console.log("After 5 seconds");
}, 5000)

function x(y){
    console.log("x");
    y();
}

x(function y(){
    console.log("y");
});