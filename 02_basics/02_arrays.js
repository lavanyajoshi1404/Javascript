const marvel_heros=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]
//Using `push()`
// Adds elements to the end of an existing array.
// When an array is pushed, it's added as a single, nested element.
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); 
// Output: ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// To access a nested element, e.g., "flash": marvel_heroes[3][1]
marvel_heros.push(dc)
console.log(marvel_heros)
console.log(marvel_heros[3][1])


//Using `concat()` 
// Merges two or more arrays. It returns a new array and does not modify existing arrays 
// console.log(all_heroes_concat);
// Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]
//const all_heros=marvel_heros.concat(dc)
//console.log(all_heros)


//// 2.3. Using the Spread Operator (`...`) 
// A modern and often preferred method for merging arrays.
// It "spreads" out the elements of arrays into a new array.
// console.log(all_heroes_spread);
// Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]
const all_new_heros=[...marvel_heros,...dc]
console.log(all_new_heros)

 //--- 3. Flattening Nested Arrays ---

// Example of a deeply nested array [09:16]

// Using `flat()` to flatten the array [10:33]
// `flat(depth)` takes an argument for the depth to flatten.
// `Infinity` can be used to flatten all nested arrays regardless of depth [11:06].
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);
// Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


 //4.1. `Array.isArray()` 
// Checks if a given value is an array. Returns `true` or `false`.
// console.log(Array.isArray("Hitesh")); // Output: false

// 4.2. `Array.from()` 
// Creates a new, shallow-copied `Array` instance from an iterable or array-like object.
// console.log(Array.from("Hitesh")); // Output: ["H", "i", "t", "e", "s", "h"]

// Interesting case with objects 
// `Array.from()` might return an empty array if it cannot directly convert the object.
const obj = { name: "Hitesh" };
// console.log(Array.from(obj)); // Output: []
// To convert object keys or values specifically:
// console.log(Array.from(Object.keys(obj))); // Output: ["name"]
// console.log(Array.from(Object.values(obj))); // Output: ["Hitesh"]
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_anotherarray=another_array.flat(Infinity)
console.log(real_anotherarray)


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"hitesh"}))//interesting study it
// 4.3. `Array.of()` [14:24]
// Creates a new `Array` instance from a variable number of arguments.
// It can convert multiple variables/elements into a single array.
// console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300]

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))
 