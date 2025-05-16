console.log(`=== if stmt ====`);
var num = 0;
if (num > 0) {
  console.log(`Bhai number 0 se bada hai`);
}
console.log("===== END ======");

var value1 = 100;
if (value1 == 100) {
  console.log(`Number is Hundred`);
} else {
  console.log(`Number is not recognize`);
}
var color = "black";
switch (color) {
  case "red":
    console.log(`Color Matched`);
    break;
  case "green":
    console.log(`Color Matched`);
    break;

  default:
    console.log(`Color Not matched`);

    break;
}

var day = "sdgfhiday";
switch (day) {
  case "Monday":
    console.log(`Today is Monday`);
    break;
  default:
    console.log(`Day out of range`);
    break;
}

console.log(
  `=====================================Find Out The smallest Number of Three Number=====================================`
);
var a = 12,
  b = 9,
  c = 10;
if (a < b && a < c) {
  console.log(`Smallest  Number is= ${a}`);
} else if (b < a && c < a) {
  console.log(`Smallest  Number is= ${b}`);
} else {
  console.log(`Smallest  Number is= ${c}`);
}

console.log(
  `=====================================Find Out The smallest Number of Three Number=====================================`
);

var marks = 50;

if (marks >= 90 && marks <= 100) {
  console.log(`"Excellent" Your Grade is :- "A" `);
} else if (marks >= 70 && marks <= 90) {
  console.log(`"Good" Your Grade is :- "B" `);
} else if (marks >= 35 && marks <= 70) {
  console.log(`"Average" Your Grade is :- "c" `);
} else {
  console.log(`"FAIL" Your Grade is :- "D" `);
}

var tcsInterview = function (gradScore, hscScore, sscScore, candidateName) {
  if (gradScore >= 70 || hscScore >= 80 || sscScore > 90) {
    console.log(`Congrats ${candidateName} you are eligible for TCS interview`);
  } else {
    console.log(
      `Sorry. ${candidateName} you are not eligible for TCS interview`
    );
  }
};
tcsInterview(80, 86, 90, "Stew");
