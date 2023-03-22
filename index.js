// Iteration 1: Names and Input
let hacker1 ="Gabriel";
let greeting = `The driver's name is ${hacker1}`;
console.log(greeting);
let hacker2 = "Debora";
let greeting2 = `The navigator's name is ${hacker2}`;
console.log(greeting2);

// Iteration 2: Conditionals

const name1 = hacker1.length;
const name2 = hacker2.length;

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${name1} characters`)
}
else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${name2} characters`)
}
else{
    console.log(`Wow, you both have equally long names, ${name1} characters!`)
}

// Iteration 3: Loops
let nameUp1 = hacker1.toUpperCase();
let nameUp2 = hacker2.toUpperCase();

let result1 = "";

for (let i = 0; i < nameUp1.length; i++){
    result1 = result1 + " " + nameUp1[i]
}
console.log(result1.trim())

let result3= result1.trim()


let result2 = "";

for (let i = nameUp2.length -1; i >= 0; i--){
    result2 = result2 + nameUp2[i];
}
console.log(result2)
let resultUp = result2.toUpperCase

let ordem = [result3, resultUp];
console.log(ordem.sort())

