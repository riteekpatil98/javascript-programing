console.log(
  `==================================Arrow Function=========================`
);

console.log(
  `<----------------------------------------------------------------------->`
);

let arrowFunction = () => {
  console.log(`Good Morning Today is Good Friday`);
};
arrowFunction();

console.log(
  `<----------------------------------------------------------------------->`
);
// let result=0;
let multi = (num1, num2, num3 = 1) => {
  let result = num1 * num2 * num3;
  console.log(
    `Given Number is : ${num1} ,${num2}, ${num3} and Multiplication is : ${result}`
  );
};
multi(5, 5, 2);
multi(10, 4);

console.log(
  `<----------------------------------------------------------------------->`
);

let add = (n1, n2, n3, n4, n5) => {
  console.log(`The Given value is : ${n1}, ${n2}, ${n3}, ${n4}, ${n5}`);
  return n1 + n2 + n3 + n4 + n5;
};
let retResultIsOne = add(100, 100, 200, 349, 756);
console.log(`After Addition Result is : ${retResultIsOne}`);

let retResultIsTwo = add("I am", "learning", "ES6", "feature", "in depth  ");
console.log(`After Addition Result is : ${retResultIsTwo}`);
