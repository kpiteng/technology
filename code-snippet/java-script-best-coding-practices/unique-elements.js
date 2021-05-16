const arrIndex = [1,2,3,4,5,3,7,9,1,6,8,0];
const arrCity = ['Paris', 'London', 'New York', 'Paris' , 'Chicago'];

const uniqueIndex = [...new Set(arrIndex)];
const uniqueCity = [...new Set(arrCity)];

console.log(uniqueIndex); // output: [1, 2, 3, 4, 5, 7, 9, 6, 8, 0]
console.log(uniqueCity); // output: ["Paris", "London", "New York", "Chicago"]