//A basic function is synchronous, meaning that JavaScript will execute it line by line. Here's an example:
function greet(){
    console.log("Hey there..");
}
greet();


// JavaScript is single-threaded, meaning it can handle one task at a time. However, with asynchronous operations (like API calls or setTimeout), JavaScript can handle tasks in the background without blocking the main thread.
function greetlater(){
    setTimeout(() => {
        console.log("Hey there after few seconds..");
    }, 5000)
}

greetlater();