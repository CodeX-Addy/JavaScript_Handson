class Human{
    
    //properties
    #age = 23; // with pound sign, we declare private data member inside class
    wt = 70;
    
    //behaviour
    walking(){
        console.log("walking...")
    }
    
    running(){
        console.log("running...")
    }
}

let obj = new Human();
console.log(obj.#age);
console.log(obj.wt);
obj.walking();
