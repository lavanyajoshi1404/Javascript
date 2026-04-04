const name="Riya"
const repoCount=50

//console.log(name+repoCount+"  value")
console.log(`Hello my name is ${name} and my repo count ${repoCount} `);

//how to declare string
const gameName = new String ('seema-remma')
console.log(gameName[0])
//For prototype
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

 const newString =gameName.substring(6);//last value is not included and negative values not allowed
 console.log(newString);
 const anotherString=gameName.slice(3,8);//also can give neagtive values for reverse
 console.log(anotherString) 
 const newStringOne="  fine  "
 console.log(newStringOne.trim());
 //remove leadig and trailing spaces
 const url="https://jsosba.com/hitesh%20choundary"
 console.log(url.replace('%20','-'))
 console.log(url.includes('hitesh'))
 console.log(gameName.split('-'))