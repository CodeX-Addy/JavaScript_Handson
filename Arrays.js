//Arrays in js is like lists in python in which we can store the values with different datatypes unlike c++ and java and they are mutable unlike strings

let arr = [1,2,3,4,"Eso"]
//console.log(arr)

//Arrays Methods in JS

let a = [1,2,3,4];
console.log(a.length); //length of the array
let b = a.toString(); //Converts arrays into strings
console.log(b);

console.log(a.join("-")); //Join elements and returns a string
console.log(a.concat(5,6,7)); //Concatenates elements and returns a new array
console.log(a.pop()); //Pop from the end
console.log(a.push(5)); //Adds elements to the end of the array and returns the new length of arr

//Shift
console.log(a.shift()); //Removes the first element of the array and returns the removed element

//Unshift
console.log(a.unshift(1)); 

//Delete
let num = [1,2,3,4,5,6,7,8,9]
delete num[0]
console.log(num); //Removes the element at the specified index but does not change the length of array

//Concat again
let num1 = [10,11]
let num2 = [12,13]
console.log(num.concat(num1, num2));

//Sort 
let arr1 = [1,5,3,4,2]
console.log(arr1.sort()); //Sorts the array in ascending order
//In order to sort in reverse order we can use comparator function
let comp = (a, b) => {
    return b-a ;
}

arr1.sort(comp); //Sorts the array in descending order
console.log(arr1)

arr1.reverse() //To reverse the array 

//Splice
let ex1 = [1,2,3,4,5]
ex1.splice(2, 3, 100, 200, 300) //Means starting from 2nd index, delete 3 elements and then add 100,200 and 300
console.log(ex1)

//Slice
let ex2 = [1,2,3,4,5]
console.log(ex2.slice(2, 4)); //Returns the elements from 2nd index
