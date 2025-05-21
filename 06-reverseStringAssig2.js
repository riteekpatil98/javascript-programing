console.log(`====================Reverse String ==================`);

var reverseString = function (str) {
  let revers = " ";
  for (let index = str.length - 1; index >= 0; index--) {
    if (str.charAt(index) != " ") {
      revers = revers + str.charAt(index);
    }
  }
  console.log(`Given String is: "${str}" and result is : ${revers}`);
};
reverseString("Hard Work always pays back");
reverseString("Soon I will be Angular IT Champ");
