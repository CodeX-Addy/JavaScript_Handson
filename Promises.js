//A basic function is synchronous, meaning that JavaScript will execute it line by line. Here's an example:
function greet(){
    console.log("Hey there..");
}
greet();


// JavaScript is single-threaded, meaning it can handle one task at a time. However, with asynchronous operations (like API calls or setTimeout), JavaScript can handle tasks in the background without blocking the main thread.
function greetlater(){
    setTimeout(() => {
        console.log("Hey there after five seconds..");
    }, 5000)
}

greetlater();

//Now what is a promise?
/*
A promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation. It allows us to handle asynchronous tasks more easily.

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


/*
async and await make working with promises more readable and maintainable. Instead of using .then() and .catch(), we can write asynchronous code as if it were synchronous.

async is a keyword used to define a function that returns a promise.
await pauses the execution of an async function until the promise is resolved or rejected.
 */

// Simulating an asynchronous task using a promise
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 2000);
    });
}

// Using async and await
async function getData() {
    console.log("Fetching data...");
    const result = await fetchData();
    console.log(result);  // Output: "Data fetched!" after 2 seconds
}

getData();


// We can combine multiple promises as well and can be run concurrently 
const promise1 = new Promise((resolve) => setTimeout(() => resolve("Task 1 complete"), 10000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Task 2 complete"), 20000));

async function runTasks() {
    console.log("Starting tasks...");
    const results = await Promise.all([promise1, promise2]);
    console.log(results);  // Output will be: ["Task 1 complete", "Task 2 complete"]
}

runTasks();

