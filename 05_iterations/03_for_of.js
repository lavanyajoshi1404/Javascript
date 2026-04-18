// for of

const arr=[1,2,3,4,5]

for (const num  of arr) {
    //console.log(num)
}
const greetings ="Hello world!"
for (const greet of greetings){
    // console.log(`Each char is ${greet}`)
}

//Maps 

const map1 = new Map ()
map1.set('IN',"India")
map1.set('USA', "United States of America")
map1.set('Fr',"France")



//console.log(map)

for (const [key,value] of map) {
    console.log(key, ':-',value)
}
// objects are not iterable 
const myObject ={
    game1:'NFS',
    game2:'Spiderman'
}
// for (const [key,value] of myObject){
//  console.log(key,':-',value);
//}

//About Objects
const my1Object ={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}
//for in loop
for (const key in my1Object) {
    
    
  //  const element = my1Object[key];
    //console.log(element)
   // console.log(`${key} shortcut is for ${my1Object[key]}`);
    
}
const programming =["js","rb","py","java","cpp"]

for (const key in programming) {
  // console.log(programming[key]);
       
}
//in for in loop we can't do iterations on map
/*const map =new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

for (const key in map){
    console.log(key)
}*/
//FOR in DESCRIPTION       =>     it works for ARRAY and OBJECT but not works on MAP
//FOR of DESCRIPTION      =>     it works for ARRAY and MAP[ key, value] but not works on OBJECT.
//FOR each DESCRIPTION =>     it works for ARRAY, OBJECT and MAP.

