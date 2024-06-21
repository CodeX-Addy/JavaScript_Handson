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

//For of loop --> only for iterable objects like arrays, strings

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