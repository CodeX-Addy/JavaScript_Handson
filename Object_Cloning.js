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

// ********************************************************
// USING ITERATION -> COMPLEX FOR NESTED OBJECTS
// ********************************************************

let obj1 = {age:23, name:"aditya"};

let obj2 = {};

for(i in obj1){
    let key = i;
    let value = obj1[key];
    
    obj2[key] = value;
}

console.log(obj1);
console.log(obj2);
