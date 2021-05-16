let firstNumber = 5;
let secondNumber = 20;
firstNumber &&= secondNumber; //output: 20
console.log(firstNumber); //output: 20
//Here is an equivalent to it:
if(firstNumber){
  firstNumber = secondNumber;
}