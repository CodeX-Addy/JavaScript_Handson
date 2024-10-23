### In JS, the code is executed inside the call stack

### As per the below example:
- Global execution context enters into call stack first
- Start and End will prints first because set time out is set for 5000ms or 5 sec
- After this, the call stack becomes completely empty.
- Then cb() function should print Callback after 5 sec of delay.
- For this purpose, cb() function should be present inside the call stack
- Now "callback queue" will comes into picture, that basically stores the remaining callback functions
- After 5 sec, the call stack will be empty and the callback queue will be non-empty
- So, the cb() function will be moved from callback queue to call stack and will be executed
- And this transition from callback queue to call stack will be done by "Event Loop"

```js
console.log("Start");
setTimeout(function cb(){
    console.log("Callback");
}, 5000)
console.log("End");
```