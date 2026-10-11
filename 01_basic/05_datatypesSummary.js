// primitive dqatatypes
// 7 category: string , number , boolean ,null , undefined, symbol, bigint

// reference type or Non primitive dataTypes
// array, objects, funtcion

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 23452768611223n

const hero = ["saktiman", "naagraj", "dogs"];
let obj = {
    name : "dipak",
    age : 23
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myFunction)
// js is dynamically typed

