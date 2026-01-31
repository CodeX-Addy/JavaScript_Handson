let obj = {
    name : "aditya",
    details : {
        age : 23,
        department : "CS"
    }
};

// Shallow Copy -> means obj2 of stack memory will reference/points to the same object as obj in heap memory
let obj2 = obj;
console.log(obj2);

// Deep copy -> means obj3 of stack memory will ref/points to the new same object values in heap memory
let obj3 = JSON.parse(JSON.stringify(obj));
console.log(obj3);
