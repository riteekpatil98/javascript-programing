
console.log(`===================Task First=================`);

function maleMarriageEligibility(gender,age,boyName){
    var result=(gender=="male" && age>=21)?
    ` Given gender is ${gender} and Age is ${age}\n Hey "${boyName}" you are Eligible for Marriage`:
    ` Given gender is ${gender} and Age is ${age}\nHey ${boyName} you are Not Eligible for Marriage.`;
     
    return result;
     

    
}
var result1=maleMarriageEligibility("male",22,"Bill");
var result2=maleMarriageEligibility("male",17,"Stew Jobs");
console.log(`${result1}`);
console.log(`${result2}`);

console.log(`===================Task Second=================`);

function femaleMarriageEligibility(gender,age,girlName){
    var rslt= (gender=="female" && age>=18)?
    `Given gender is ${gender} and Age is ${age}: \nHey "${girlName}" you are Eligible for Marriage`:
    `Given gender is ${gender} and Age is ${age}: \nHey "${girlName}" you are Not Eligible for Marriage`
    
    return rslt;

}
var rslt1=femaleMarriageEligibility("female",16,"Jenifer");
var rslt2=femaleMarriageEligibility("female",27,"Malinda Gates");
console.log(rslt1);
console.log(rslt2);

