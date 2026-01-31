//For loop with sum of n natural numbers example
let sum = 0;
let n = prompt("Enter your number: ");
n = Number.parseInt(n);
for(let i = 0; i < n; i++){
    sum += (i+1);
}
console.log(sum);


//For In loops --> mostly used for objects and arrays

let obj = {
    student1 : 100,
    student2 : 90,
    student3 : 80,
    student4 : 70
}

for(let i in obj){
    console.log("Marks of " + i + " is " + obj[i]);
}

//For of loop --> also for iterable objects like arrays, strings, objects

 for(let a of "Aditya"){
    console.log(a);
 }

 //While loop
let x = prompt("Enter your number: ");
x = Number.parseInt(x);
 while(x<3){
    console.log(x);
    x++;
 }

 //do-while loop 
let y = prompt("Enter your number: ");
y = Number.parseInt(y);
 do{
    console.log(y);
    y++;
 }while(y<3);

// For Each Loop
const arr = [1,2,2,3,4,5,];

arr.forEach((num, ind) => {
    console.log(`The number ${num} present on this index ${ind}`);
})

const ans = (arr) => {
    let sum = 0;
    arr.forEach((num) => {
        sum += num;
    })
    return sum;
}

console.log(ans([10, 20, 30, 40]));
