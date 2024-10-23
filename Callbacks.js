//Callback function helps us to bring async nature in js
//Otherwise js is synchronous and single threaded in nature
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

// Event Listeners are used to listen to events on the DOM
// Example usecase: We need to count the number of times, button clicked on browser
//You have to make a html for that and add the element button having id "click"

//This is an example of closure where event listener is wrapped around a function to make sure the data integrity
function attachEventListener(){
    let count = 0;
    document.getElementById("click").addEventListener(
        "click",function xyz(){
            console.log("Button Clicked", ++count);
        }
    )
}
attachEventListener();