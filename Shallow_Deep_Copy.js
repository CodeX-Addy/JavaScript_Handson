let obj = {
    name : "aditya",
    details : {
        age : 23,
        department : "CS"
    }
};

// Shallow Copy -> means obj2 will reference/points to the same object as obj in heap memory
let obj2 = obj;
console.log(obj2);

// Deep copy
let obj3 = JSON.parse(JSON.stringify(obj));
console.log(obj3);
