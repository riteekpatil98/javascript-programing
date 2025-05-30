console.log(
  `<----------------------------------------------------------------------->`
);

const array = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

array.forEach(function (element, index) {
  console.log(`Index  : ${index}  ELement  : ${element}`);
});

console.log(
  `<----------------------------------------------------------------------->`
);
let negativeArray = [];
let positiveArray = [];
array.forEach((item) => {
  if (item > 0) {
    positiveArray.push(item);
  } else if (item < 0) {
    negativeArray.push(item);
  }
});
console.log(`Only Positive number of array  :`, positiveArray);

console.log(`Only Negative number of array  :`, negativeArray);

console.log(
  `<----------------------------------------------------------------------->`
);
console.log(`---------Even Number Element--------------`);
array.forEach((currElement) => {
  if (currElement % 2 == 0) {
    console.log(currElement);
  }
});

console.log(
  `<----------------------------------------------------------------------->`
);
let result = 0;
array.forEach((element) => {
  result = result + element;
});
console.log(`Total Sum of array Element is : ${result}`);

console.log(
  `<----------------------------------------------------------------------->`
);

console.log(`---------Even Index position  Element--------------`);
array.forEach((element, index) => {
  if (index % 2 == 0) {
    console.log(element);
  }
});
