const piDescriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(piDescriptor);


const User={
    name:'Lavanya',
    age:20,
    isAvailable:true
}
console.log(Object.getOwnPropertyDescriptor(User,'name'));

Object.defineProperty(User,'name',{
    writable:false,
    configurable:false,
    enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(User,'name'));


for(let [key,value] of Object.entries(User)){
    console.log(`${key}: ${value}`);
}