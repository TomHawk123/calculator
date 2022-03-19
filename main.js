const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber
    return sum
}

const subtract = (firstNumber, secondNumber) => {
    const difference = firstNumber - secondNumber
    return difference
}

const divide = (firstNumber, secondNumber) => {
    const quotient = firstNumber / secondNumber
    return quotient
}

const multiply = (firstNumber, secondNumber) => {
    const product = firstNumber * secondNumber
    return product
}

const square = (firstNumber) => {
    const squareProduct = firstNumber * firstNumber
    return squareProduct
}

let twoLegs = multiply(18,2)
let fourLegs = multiply(6,4)

console.log(`If there are 60 legs, and there are three times as many animals with two legs than with four legs, then six four-legged animals would be ${fourLegs} and eighteen two-legged animals would be ${twoLegs}.`)
let totalAnimals = add(6,18)
console.log(`There are ${totalAnimals} total animals on the farm.`)