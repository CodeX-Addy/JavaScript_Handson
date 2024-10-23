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

//Now what is a promise?
/*
A promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation. It allows you to handle asynchronous tasks more easily.

A promise has three states:

Pending: The initial state, when the operation is not yet completed.
Resolved (Fulfilled): The operation completed successfully.
Rejected: The operation failed
*/

const myPromise = new Promise((resolve, reject)=>{
    let success = false;
    if(success){
        resolve("Message successfully sent..");
    }
    else{
        reject("Message destroyed..");
    }
})

//Calling promise here
myPromise.then((message)=>{
    console.log(message);
}).catch((error) => {
    console.log(error);
})