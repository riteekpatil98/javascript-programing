console.log(`===============Task First=================`);
var evenOdd = function (num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
};
var result = evenOdd(45);
console.log(`The Given Number is : 45 and This Number is : ${result}`);

var result = evenOdd(70);
console.log(`The Given Number is : 70 and This Number is : ${result}`);

var result = evenOdd(67);
console.log(`The Given Number is : 67 and This Number is : ${result}`);

var result = evenOdd(98);
console.log(`The Given Number is : 98 and This Number is : ${result}`);

console.log(`===============Second First=================`);

var eligibleVote = function (age) {
  if (age >= 18) {
    console.log(`You are Eligible for vote`);
  } else {
    console.log(`You are Not Eligible for vote`);
  }
};
eligibleVote(18);
eligibleVote(20);
eligibleVote(17);
eligibleVote(40);

console.log(`===============Third First=================`);

var stringLength = function (str) {
  if (str.length > 10) {
    console.log(
      `Given String is: ${str} and String Length is More Than 10 Character.`
    );
  } else {
    console.log(
      `Given String is: ${str} and String Length is Below Than 10 Character.`
    );
  }
};
stringLength("JavaScript-ES6");

console.log(`===============Fourth First=================`);

var stringStart = function (str1) {
  if (str1.startsWith("Java") || str1.startsWith("Prog")) {
    return `Given String is ${str1} and This String Starts With`;
  } else {
    return `Given String is ${str1} This String Not Starts With`;
  }
};
var result1 = stringStart("JavaScript Language");
console.log(`${result1} "Java"`);

var result1 = stringStart("Programming");
console.log(`${result1} "Prog"`);
