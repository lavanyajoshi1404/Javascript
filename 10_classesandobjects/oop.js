//Object Literal
const user ={
    username:'hitesh',
    loginCount:8,
    signedIn:true,

    getUserDetails: function (){
       // console.log("Got user details from database");
       console.log(`Username:${this.username}`);
       console.log(this);
    }

}
//nsole.log(user.username);
// console.log(user.getUserDetails());
  //console.log(this);

//Constructor function-allows to create multipl instance from one objectliteral

function User(username,loginCount,isLoggedIn){
 this.username=username;
 this.loginCount=loginCount;
 this.isLoggedIn=isLoggedIn;

 this.greeting=function(){
    console.log(`Wlecome ${this.username}`);
 }

 return this
}
const user1= new User("hitesh",8,true)
const user2= new User("javascript",10,false)
console.log(user1.constructor);
console.log(user2);

// constructor function give you new instance verytime you call it with new keyword and it will return the object with the properties and methods defined in the constructor function.
//  It is a way to create multiple objects with similar properties and methods without having to write the same code multiple times.