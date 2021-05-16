const arrStringValues = ['1', '2', '3', '4.567', '-89.95', [1.2345]];
const arrNumbers = arrStringValues.map(Number);

console.log(arrNumbers); // output: [1, 2, 3, 4.567, -89.95, 1.2345]