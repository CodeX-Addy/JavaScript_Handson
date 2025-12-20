//let a = prompt("Enter your number: ");
//console.log(typeof a) //String
//a = Number.parseInt(a)
//console.log(typeof a) //Number

let b = 4;
if(b>18)
   console.log("You can Drive");
else 
    console.log("Go to home");

//In the similar way, we can use else if statements

//Ternary operators
let marks = 70;
marks>80?console.log("Pass"):console.log("Fail");


//Switch case statements
let first = 2;
let second = 1;
let op = '+';

switch(op){
    case '+':
        console.log(first+second);
        break;
    case '-':
        console.log(first-second);
        break;
    case '*':
        console.log(first*second);
        break;  
    case '/':
        console.log(first/second);
        break;
    default:
        console.log("Invalid Operation");
}