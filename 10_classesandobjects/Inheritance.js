//Inheritance in javascript is a mechanism where one class can inherit
//properties and methods from another class. It allows for code reusability and the creation of hierarchical relationships between classes. In JavaScript, inheritance can be achieved using prototypes or the class syntax introduced in ES6.
//In the example below, we have a base class called User that has properties like username, email, and password. It also has methods like encryptPassword and changeusername.
//We then create a subclass called Admin that extends the User class. The Admin class inherits the properties and methods of the User class, allowing it to access and use them. Additionally, the Admin class can have its own properties and methods specific to admin users.

class User {
    constructor(username){
        this.username = username;
    }
        
    
    logMe(){
       
   console.log(`I am ${this.username}`);

    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }

    addcourse(course){
        console.log(`${this.username} added the course ${course}`);
    }
}

const Navin = new Teacher("Navin","navin@example.com","navin123")
Navin.logMe();
Navin.addcourse("JavaScript"); 

console.log(Navin instanceof Teacher); // true
console.log(Navin instanceof User); // true