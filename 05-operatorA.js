console.log(`||-----------------Task First-------------------||`);

function squareOfWord(string){

    var spString=string.split(" ");
    console.log(`Given String is:- "${string}" length of word is:  ${spString.length } Square of word is:  ${spString.length *spString.length} `);
}
squareOfWord("JavaScript");
squareOfWord("Google chrome");
squareOfWord("Web Developer smart");
console.log(`||-----------------Task Second-------------------||`);
function giveString()
{
    var str1="I am MERN Stack Developer";
    var totalLengthOfString=str1.length;
    console.log(`Length of String is: ${totalLengthOfString} `);
    console.log(`Length of Word is: ${str1.split(" ").length} `);

    console.log(`Length of string / Length of string word Result is:- ${totalLengthOfString/str1.split(" ").length}`);
    console.log(`Length of string * Length of string word Result is:- ${totalLengthOfString*str1.split(" ").length}`);
}
giveString();