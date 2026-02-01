// *************************************************************************************
// CLASS DECLARATION
// *************************************************************************************

class Human{
    
    //properties
    #age = 23; // with pound sign, we declare private data member inside the class
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


// *************************************************************************************
// TO ACESS PRIVATE MEMBERS INSIDE THE CLASS -> THIS KEYWORD
// *************************************************************************************

class Human{
    
    //properties
    #age = 23;
    wt = 70;
    
    //behaviour
    walking(){
        console.log("walking...", this.#age);
    }
    
    running(){
        console.log("running...");
    }
}

let obj = new Human();
console.log(obj.wt);
obj.walking();

// *************************************************************************************
// TO ACCESS PRIVATE MEMBERS OUTSIDE CLASS -> GETTER/SETTER
// *************************************************************************************

class Human{
    
    //properties
    #age = 23;
    wt = 70;
    
    //behaviour
    walking(){
        console.log("walking...", this.#age);
    }
    
    running(){
        console.log("running...");
    }
    
    //getter
    get get_age(){
        return this.#age;
    }
    
    //setter
    set set_age(val){
        this.#age = val;
    }
}

let obj = new Human();
console.log(obj.get_age;


// *************************************************************************************
// CONSTRUCTORS
// *************************************************************************************

class Human{
    
    age;
    height;
    
    constructor(age, height){
        this.age = age;
        this.height = height;
    }
}

let obj = new Human(2, 3);
console.log(obj.age, obj.height);
