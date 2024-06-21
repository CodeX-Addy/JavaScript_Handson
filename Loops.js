//For loop with sum of n natural numbers example
let sum = 0;
let n = prompt("Enter your number: ");
n = Number.parseInt(n);
for(let i = 0; i < n; i++){
    sum += (i+1);
}
console.log(sum);