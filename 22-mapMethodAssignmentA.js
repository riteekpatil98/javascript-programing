console.log(
  `<------------------------------------------------------------------>`
);
const array = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

let newArray = array.map((element) => {
  return element + 10;
});

console.log(`Given Array is : `, array);
console.log(
  `<------------------------------------------------------------------>`
);

console.log(`Adding 10 into each Element :`, newArray);

console.log(
  `<------------------------------------------------------------------>`
);

let cube = array.map((element) => {
  return element * element * element;
});
console.log(`Cube of Every element : `, cube);

console.log(
  `<------------------------------------------------------------------>`
);

let add = array.map((element, index) => {
  return element + index;
});
console.log(`Addition of corresponding Element and index :  `, add);
