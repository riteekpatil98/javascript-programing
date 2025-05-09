var greet = "Good Morning";
console.log(`======= Find the length of the string =========`);
var greetLength = greet.length;

console.log(`${greet} - String length is : ${greetLength}`);

console.log(`========== chatAt() ===============`);
var chatAtIndex0 = greet.charAt(0);
console.log(`Char available at index 0 is: ${chatAtIndex0}`);

var charAtIndex7 = greet.charAt(7);
console.log(`Char available at index 7 is: ${charAtIndex7}`);

var charAtIndex50 = greet.charAt(50);
console.log(`Char available at index 50 is: ${charAtIndex50}`);

var str = "Hello buddy how are you doing";
var charAtLastIndex = str.charAt(str.length-1);
console.log(`Char available at last index is: ${charAtLastIndex}`);


console.log(`========== concat() ===============`);
var firstName = "Stew";
var lastName = " Jobs";
var result = firstName + lastName;
console.log(`Concat strings using + operator ${result} `);

var result = firstName.concat(lastName).concat(" I am unique");
console.log(`Concat strings using concat():  ${result} `);

console.log(`========== indexOf() ===============`);
var greet = "Good Morning";
var indexOfO = greet.indexOf("o");
console.log(`Index of char o : ${indexOfO} `);
var indexOfZ = greet.indexOf("z");
console.log(`Index of char z : ${indexOfZ} `);

var indexOfMorning = greet.indexOf("Morning");
console.log(`Index of sub string "Morning" : ${indexOfMorning} `);
console.log(`========== trim() ===============`);
var day = "  Today is Friday   ";
console.log(`Before trim: ${day.length}`);
var trimResult = day.trim();
console.log(`After trim: ${trimResult.length}`);
var totalRemovedSpaces = day.length - trimResult.length;
console.log(`Total Spaces removed after trim() is: ${totalRemovedSpaces}`);

console.log("--------Find the length of string--------");

var str ="Hello Good Morning";
var totallength=str.length;
console.log(`Total Length Of String is:- ${totallength}`);

console.log(`========== chatAt() ===============`);

var indexPosition=str.charAt(8);
console.log(`Character Position in Index is:- ${indexPosition} `);

var str1 = "My Name is Riteek Mohan  Patil";

var lastIndexCharacter=str1.charAt(str1.length-1);
console.log(`Last Index Character is:- ${lastIndexCharacter}`);


console.log(`========== concat() ===============`);

var firstName="Riteek";
var lastName="  Patil";
var cobString= firstName+lastName;
console.log(`Concating String Using + Operator:- ${cobString}`);

var concatString=firstName.concat(" Mohan").concat(lastName);

console.log(`Concating String Using + Operator:- ${concatString}`);

console.log(`========== indexOf() ===============`);

var str1 = "My Name is Riteek Mohan Patil";

var indPosiosion = str1.indexOf("R");
console.log(`Index of character R Position is:- ${indPosiosion}`);

var subString=str1.indexOf("Patil");

console.log(`SubString Index Position is:-${subString}`);


console.log(`========== trim() ===============`);


var str2 = "  Hello guys i am React developer ";

console.log(`Before The Trim Length is:- ${str2.length}`);

var trimResult= str2.trim();
console.log(`Trim Result :-${trimResult}`);


console.log(`After The Trim Length is:- ${trimResult.length}`);

var totalRemovedSpaces=str2.length-trimResult.length;
console.log(`Total Removed Spaces is:-${totalRemovedSpaces}`);































