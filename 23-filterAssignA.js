console.log(
  `<------------------------------------------------------------------>`
);
const array = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
let greaterElement = array.filter((element) => {
  return element > 50;
});
console.log(`Greater Element Than 50 : `, greaterElement);

console.log(
  `<------------------------------------------------------------------>`
);

let evenNUmber = array.filter((element) => {
  return element % 2 == 0;
});
console.log(`Even Number is : `, evenNUmber);

console.log(
  `<------------------------------------------------------------------>`
);

let oddNUmber = array.filter((element) => {
  return element % 2 != 0;
});
console.log(`Odd Number is : `, oddNUmber);

console.log(
  `<------------------------------------------------------------------>`
);

let multiElement = array.filter((element) => {
  return element % 5 == 0;
});
console.log(`Multiplied by 5 Element  : `, multiElement);

console.log(
  `<------------------------------------------------------------------>`
);

let betweenNumber = array.filter((element) => {
  return element > 20 && element < 50;
});
console.log(`Element Between 20 and 50  : `, betweenNumber);
