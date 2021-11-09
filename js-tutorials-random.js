// destructuring Arrays :     03 nov 2021

const alphabet = ["A", "B", "C", "D", "E", "F"];
const numbers = ["1", "2", "3", "4", "5","6"];

const [ a,,c, ...rest ] = alphabet;


console.log(a)
console.log(c)
console.log(rest)

// destructuring objects :

function sumAndMultiply (a , b) {
    return [a+b , a*b]
}

const array = sumAndMultiply(2,3)
console.log(array)

// we can destructure the array objects
const [sum , multiply] = sumAndMultiply(2,3)
console.log(sum)
console.log(multiply)








