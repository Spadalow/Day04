function main(numOne, numTwo) {
    // Only change code below this line
var numOne= numOne;
var numTwo = numTwo ;
var quotient = numOne / numTwo;
if (numTwo === 0){
    quotient = 'Divide by 0! Cannot divide by zero!';
}else{
    // Only change code above this line
}
    return quotient;

}

console.log(main(15, 3)); 
console.log(main(25, 5));//change this line
console.log(main(420, 10));
console.log(main(55, 0))

module.exports = main;