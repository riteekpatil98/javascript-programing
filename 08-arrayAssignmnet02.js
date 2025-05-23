const array = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given Array :`, array);
console.log(`<------------------------------------------------------------->`);

console.log(`Total Available element is: ${array.length}`);
console.log(`<------------------------------------------------------------->`);
let firstElement = array[0];
let lastElement = array[array.length - 1];
console.log(
  `First Element is: ${firstElement} and Last Element is: ${lastElement}`
);
console.log(`<------------------------------------------------------------->`);

let thrdLastElement = array[array.length - 3];
console.log(`Third Last Element is: ${thrdLastElement} `);
console.log(`<------------------------------------------------------------->`);
let evenElement = [];
for (const element of array) {
  if (element % 2 == 0) {
    evenElement.push(element);
  }
}
console.log(`The Even Element is : ${evenElement}`);

console.log(`<------------------------------------------------------------->`);
let oddElement = [];
for (const element of array) {
  if (element % 2 != 0) {
    oddElement.push(element);
  }
}
console.log(`The Odd Element is : ${oddElement}`);

console.log(`<------------------------------------------------------------->`);
let evenPositionArray = [];
let sum = 0;
for (let ip = 0; ip < array.length; ip++) {
  if (ip % 2 == 0) {
    let item = array[ip];
    evenPositionArray.push(item);
    sum = sum + item;
  }
}
console.log(
  `Even Position Element is : ${evenPositionArray} and Sum of all Element is : ${sum}`
);
console.log(`<------------------------------------------------------------->`);

let oddPositionArray = [];
let addition = 0;
for (let ip = 0; ip < array.length; ip++) {
  if (ip % 2 != 0) {
    let item = array[ip];
    oddPositionArray.push(item);
    addition = addition + item;
  }
}
console.log(
  `Odd Position Element is :${oddPositionArray} and Sum of all Element is: ${addition}`
);

console.log(`<------------------------------------------------------------->`);
let totalSum = 0;
for (const element of array) {
  totalSum = totalSum + element;
}
console.log(`Sum of the Total Element is: ${totalSum}`);

console.log(
  `<---------------------------------Multiplied by 5---------------------------->`
);
let ele;
for (const element of array) {
  if (element % 5 == 0) {
    console.log(element);
  }
}

console.log(
  `<----------------------------------------------------------------------->`
);

let includeNum = array.includes(115);
console.log(`115 is Available in Array ? :  ${includeNum}`);

console.log(
  `<----------------------------------------------------------------------->`
);

let includeNumber = array.includes(23);
console.log(`23 is Available in Array ? :  ${includeNumber}`);

console.log(
  `<----------------------------------------------------------------------->`
);
console.log(`Before Inserting Element Arrays : `, array);

array.splice(3, 0, 55, 66);
console.log(`After Inserting Element 55,66  Arrays : `, array);

console.log(
  `<----------------------------------------------------------------------->`
);

array.splice(4, 3);
console.log(`Deleted 3 Element : ${array}`);
