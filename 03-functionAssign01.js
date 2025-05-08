console.log("||------Function with no argument and no return type---||");

function myname(){
    console.log("My Name is:- Riteek Patil");
    
}
myname();

function education(){
    console.log("My Education in MCA");
    
}
education();

console.log("||-------------Personal Details with arguments---------||");



function personalDetails(firstName,lastName,collageName){
    
    console.log("First Name is:-",firstName);
    
    console.log("Last Name is:-",lastName);
    
    console.log("Collage Name is:-",collageName);
    
}
personalDetails("Riteek","Patil","G.H.Raison");



console.log("||-------------Function with Three Parameter---------||");

function addThreeValue(val1,val2,val3){
     var result=val1+val2+val3;
    console.log("Addition is:-",result);
    return result;

    
}
addThreeValue(10.23,600,40);
addThreeValue("Hello ","Good ","Morning ");





