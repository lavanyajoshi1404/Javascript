// Static Properties and Methods in JavaScript
// Static properties and methods are associated with the class itself rather than instances of the class. They can be accessed directly on the class without creating an instance. Static members are often used for utility functions or shared data that doesn't depend on individual instances.

class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`I am ${this.username}`);
    }

     static createID(){
        return `123`
    }
}

const chai=new User("chai");
console.log(User.createID());

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }
}
const iphone=new Teacher("iphone","iphone@example.com","iphone123");
console.log(User.createID());