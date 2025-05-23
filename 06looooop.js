// var sum = 0;
// for (let i = 0; i <= 10; i++) {
//   sum = sum + i;
//   console.log(sum);
// }

// var str = "Hello Buddy";
// var strReverse = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   if (str.charAt(i) != " ") {
//     strReverse = strReverse + str.charAt(i);
//   }
// }
// console.log(strReverse);

// console.log(
//   `====================First And Last Character Upper Case===============`
// );

// var upLow = function (str) {
//   let upperString = "";
//   for (let index = 0; index <= str.length; index++) {
//     if (index == 0 || index == str.length - 1) {
//       upperString = upperString + str.charAt(index).toUpperCase();
//     } else {
//       upperString = upperString + str.charAt(index);
//     }
//   }
//   return upperString;
// };
// let upLowString = upLow("hduhd");
// console.log(upLowString);

// console.log(
//   `====================Replace * with vowel character===============`
// );

// var replaceVowel = function (str) {
//   let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   let result = " ";
//   for (let index = 0; index <= vowel.length; index++) {
//     if (vowel.includes(str.charAt(index))) {
//       result = result + "*";
//     } else {
//       result = result + str.charAt(index);
//     }
//   }
//   console.log(result);
// };
// replaceVowel("Good Day");
