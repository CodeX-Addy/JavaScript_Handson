// In JS, for each function invokation, an execution context will be created, that composed of memory and code section in function call stack

//For each execution context, there is a space created for that referenced to the lexical environment of it's parent

//Lexical means --> In sequence or hierarchy

function a(){
    c()
    function c(){
         console.log(b); // Here js engine tries to check value of b inside this scope initially
    }
}

var b = 2;
a();