// ********************************************************
// USING SPREAD OPERATOR
// ********************************************************

let obj1 = {age: 23, name:"aditya"};

let obj2 = {...obj1};

console.log(obj1);
console.log(obj2);


// ********************************************************
// USING ASSIGN METHOD
// ********************************************************

let obj1 = {age:23, name:"aditya"};

let obj2 = Object.assign({}, obj1);

console.log(obj1);
console.log(obj2);
