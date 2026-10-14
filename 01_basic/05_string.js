const name = "dipak"
const repoCount = 50

console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('di-p-ak');
console.log(gameName[0])
console.log(gameName.__proto__)
// string object hota hao with key value pair jisme hum differnet nmethods use kar sakte hai

console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

 const newString = gameName.substring(0, 4)
//  we cant guive negative value in substring
 console.log(newString)

 console.log(gameName.slice(0, 4))
//  we can use here the negative starting or ending

// now when user give spaces too much in a string starting and end portion
console.log(" 1 dipak  ".trim())

const url = "https://dipak.com/dipak%20kamti"

console.log(url.replace('%20', '_'))

console.log(url.includes('dipak'))
console.log(url.includes('di0'))

console.log(gameName.split('-'))