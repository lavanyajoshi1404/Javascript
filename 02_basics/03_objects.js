//singleton- when made by consructor
//Object.create-constructor method
//object literal
const mySym=Symbol("key1")
const JsUser={
    name:"Hitesh",
    [mySym]:"mykey1",
    age:18,
    location:"Jaipur",
    email:"abcgoogle@.com",
    isLoggedin:false,
    lastLogininDays:["Monday","Saturday"]


}
console.log(JsUser.email)
console.log(JsUser["email"])
//when we have to use a value like a symbol use it like square bracket
console.log(JsUser[mySym])

JsUser.email="hitesh@chatgpt.com"
//Object.freeze(JsUser)//dont change value 
JsUser.email="hitesh@microsoft.com"
console.log(JsUser)

JsUser.greeting= function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo =function(){
    console.log(`Hello JS user,${this.name}`)
}
 console.log(JsUser.greeting())//=>undefined
 console.log(JsUser.greetingTwo())
//always accesed values of objects by but in some cases square brackets are necessary