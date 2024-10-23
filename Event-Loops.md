### In JS, the code is executed inside the call stack

### As per the below example:
- Global execution context enters into call stack first
- Start and End will prints first because set time out is set for 5000ms or 5 sec
- After this, the call stack becomes completely empty

```js
console.log("Start");
setTimeout(function cb(){
    console.log("Callback");
}, 5000)
console.log("End");
```