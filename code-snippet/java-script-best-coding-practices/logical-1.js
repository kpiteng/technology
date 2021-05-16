let firstNumber = null;
let secondNumber = 10;
firstNumber ||= secondNumber; //output: 10
console.log(firstNumber); //output: 10
//Here is an equivalent to it:
if(!firstNumber){
 firstNumber = secondNumber;
}