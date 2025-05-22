const fruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`<----------------------------------------------->`);

console.log(`Given array :-  ${fruits}`);
console.log(`<----------------------------------------------->`);

let firstElement = fruits[0];
let lastElement = fruits[fruits.length - 1];
console.log(
  `The First element is: ${firstElement} and Last Element is : ${lastElement}`
);
console.log(`<----------------------------------------------->`);
fruits.unshift("papaya");
console.log(` Adding "Papaya"in array : ${fruits} `);
console.log(`<----------------------------------------------->`);

let deleteElement = fruits.splice(4, 1);

console.log(`After removing Mango: ${fruits} `);
console.log(`<----------------------------------------------->`);

fruits.splice(fruits.length, 0, "Pineapple");
console.log(`Pineapple Added in array : ${fruits}`);
console.log(`<----------------------------------------------->`);
fruits.splice(4, 0, "Dragon Fruits");

console.log(`Dragon Fruits added in array: ${fruits}`);
console.log(`<----------------------------------------------->`);
fruits.splice(2, 1, "Kiwi");
console.log(`Replacing Orange with Kiwi in array  :  ${fruits} `);
console.log(`<----------------------------------------------->`);

let firstToFour = fruits.slice(1, 4);
console.log(`1 to 4 Element : ${firstToFour}`);
console.log(`<----------------------------------------------->`);

let lastThree = fruits.slice(fruits.length - 3);

console.log(`Last Three Element is: ${lastThree}`);
