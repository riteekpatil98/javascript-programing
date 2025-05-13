console.log(`==========Greatest Number=========`);

function greatestNumber(num1,num2){

    var greatestNum=num1>num2?`${num1}`:`${num2}`;
    console.log(`Given  number is ${num1} and ${num2}. Greatest Number is: ${greatestNum}`);
    
}
greatestNumber(10,-10);
greatestNumber(800,899);

console.log(`==========Even or Odd Number=========`);

function isEvenOrEvenNum(num){
    var result=num%2==0?"Even":"Odd";
    console.log(`Given Number is ${num} and This Number is: ${result}`);
    
}
isEvenOrEvenNum(29);
isEvenOrEvenNum(44);
isEvenOrEvenNum(0);
isEvenOrEvenNum(101);


console.log(`==========Word Length Even or Odd=========`);

function wordLength(word)
{
    var wordLen=word.length;
    console.log(`Given Word is "${word}" , Length is ${wordLen} and it's: ${wordLen%2==0?"Even":"Odd"}`);
    
}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");


