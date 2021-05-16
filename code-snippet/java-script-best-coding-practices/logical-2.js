//when first value is null or undefined
let firstNumber = null;
let secondNumber = 10;
firstNumber ??= secondNumber; //output: 10
console.log(firstNumber); //output: 10
//when first value is truthy
firstNumber = 9;
firstNumber ??= secondNumber; //output: 9
console.log(firstNumber); //output: 9
//Here is an equivalent to it:
if(firstNumber == null || firstNumber == undefined){
 firstNumber = secondNumber;
}