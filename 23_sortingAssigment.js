const arrayRollNumber = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`Given Array is :- `, arrayRollNumber);
console.log(`-------------- Reverse array------------`);

arrayRollNumber.reverse();
console.log(arrayRollNumber);
console.log(`-------------- Sorted array------------`);
let sortArray = arrayRollNumber.sort();
console.log(sortArray);

console.log(`-------- Sorted array in Ascending Order Custom logic---------`);

let ascendingArray = arrayRollNumber.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(ascendingArray);

console.log(`-------- Finding Greatest Number---------`);

let decOrderArray = arrayRollNumber.sort((a, b) => {
  return a > b ? -1 : 1;
});
let greatNumber = decOrderArray[0];
console.log(`Greatest Num is : ${greatNumber}`);

console.log(`-------- Finding Smallest Number---------`);

let assOrderArray = arrayRollNumber.sort((a, b) => {
  return a > b ? 1 : -1;
});
let smallNumber = assOrderArray[0];
console.log(`Smallest Num is : ${smallNumber}`);

console.log(` --------Duplicate Element Removed---------`);

let newArray = [...new Set(arrayRollNumber)];
console.log(newArray);
