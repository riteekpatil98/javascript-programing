console.log(
  `===========================Vowel Count (using If Condition)==============================`
);
var vowelCount = function (str) {
  let sum = 0;
  for (let index = 0; index <= str.length; index++) {
    if (
      str[index] == "a" ||
      str[index] == "A" ||
      str[index] == "e" ||
      str[index] == "E" ||
      str[index] == "i" ||
      str[index] == "I" ||
      str[index] == "o" ||
      str[index] == "U" ||
      str[index] == "u" ||
      str[index] == "O"
    ) {
      sum++;
    }
  }
  console.log(`Total number of Vowels: ${sum}`);
};
vowelCount("I am very good IT Developer");
console.log(
  `===========================Vowel Count (using include Method)==============================`
);

var vowelCount = function (str) {
  let vowel = "AaeEIiOoUu";
  let sum = 0;
  for (let index = 0; index <= str.length; index++) {
    if (vowel.includes(str[index])) {
      sum++;
    }
  }
  return sum;
};
let totalVowelIs = vowelCount("I am very good IT Developer");
console.log(
  `The Given String is: "I am very good IT Developer" And Total Number of Vowel is: ${totalVowelIs}`
);

console.log(
  `===========================SUM of Cube==============================`
);

var sumOfCube = function (num) {
  let additionIs = 0;
  for (let i = 0; i <= num; i++) {
    additionIs = additionIs + i * i * i;
  }
  console.log(`Given Number is`, num);

  return additionIs;
};
let totalAddIs = sumOfCube(5);
console.log(`Sum of Cube is: ${totalAddIs}`);

console.log(
  `===========================OddPosition Character==============================`
);

var OddPositionChars = function (str1) {
  let oddCharacter = "";
  for (let index = 0; index <= str1.length; index++) {
    if (index % 2 != 0 && str1.charAt(index) != " ") {
      oddCharacter = oddCharacter + str1[index];
      //
    }
  }
  console.log(
    `String is: "${str1}" and OddPosition Char. and without Empty Space  string is :"${oddCharacter}" `
  );
};
OddPositionChars("Hard Work always pays back");
OddPositionChars("Soon I will be UI IT Champ");
