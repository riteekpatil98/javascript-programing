console.log(`===========================Implicit Conversion to String==========================`);


var result;

result="3"+ 2;
console.log(`1) Given value is = "3" + 2 and  Result is : "${result}" Reason:  we have use string and number entity and using  " + " operator so it will be convert number into string and concatenating both string `);


result="3"+ true;
console.log(`2) Given value is = "3" + true and  Result is : "${result}" Reason:  we have use string and Boolean entity and using  " + " operator so it will be convert Boolean into string and concatenating both string `);


result="3"+ undefined;
console.log(`3) Given value is = "3" + undefined and  Result is : "${result}" Reason:  we have use string and undefined entity and using  " + " operator so it will be convert undefined into string and concatenating both string `);

result="3"+ null;
console.log(`4) Given value is = "3" + null and  Result is : "${result}" Reason:  we have use string and null entity and using  " + " operator so it will be convert null into string and concatenating both string `);


console.log(`===========================Implicit boolean Conversion to number==========================`);


result="4" - true;
console.log(`1) Given value is = "4" - true and  Result is : ${result} Reason:  we have use string and true entity and using  " - " operator so it will be trying to convert both entity in number `);


result= 4 + true;
console.log(`2) Given value is = 4 + true and  Result is : ${result} Reason:  we have use number and true entity and using  " + " operator so it will be Performing Addition  `);


result= 4 + false;
console.log(`3) Given value is = 4 + false and  Result is : ${result} Reason:  we have use number and false entity and using  " + " operator so it will be Performing Addition  `);


console.log(`===========================Implicit String Conversion to number==========================`);



result="4" - " 2";
console.log(`1) Given value is = "4" - " 2" and  Result is : ${result} Reason:  we have use both entity is string and using  " - " operator so it will be trying to convert both entity in number `);


result="4" - 2;
console.log(`2) Given value is = "4" - 2 and  Result is : ${result} Reason:  we have use string and number entity and using  " - " operator so it will be trying to convert both entity in number `);

result="4" * 2;
console.log(`3) Given value is = "4" * 2 and  Result is : ${result} Reason:  we have use string and number entity and using  " * " operator so it will be trying to convert both entity in number `);

result="4" / 2;
console.log(`4) Given value is = "4" / 2 and  Result is : ${result} Reason:  we have use string and number entity and using  " / " operator so it will be trying to convert both entity in number `);


console.log(`===========================Undefined used with number, boolean or null given NAN==========================`);


result= 4 + undefined;
console.log(`1 Given value is =  4 + undefined and  Result is : ${result} Reason:  we are Performing Invalid Operation `);

result= 4 - undefined;
console.log(`2 Given value is =  4 - undefined and  Result is : ${result} Reason:  we are Performing Invalid Operation `);

result= true + undefined;
console.log(`3 Given value is =  true + undefined and  Result is : ${result} Reason:  we are Performing Invalid Operation `);


result= null + undefined;
console.log(`4 Given value is =  null + undefined and  Result is : ${result} Reason:  we are Performing Invalid Operation `);


console.log(`===========================Explicit Conversion Operation==========================`);

result= Number("324");
console.log(`1 Given value is String= "324" and  Result is : ${result} and type is: ${typeof result}  Reason:  Converted type using number Method  `);


result= Number("324e-1");
console.log(`2 Given value is String= "324e-1" and  Result is : ${result} and type is: ${typeof result}  Reason:  Converted type using number Method  `);


result= Number(true);
console.log(`3 Given value is Boolean = true and  Result is : ${result} and type is: ${typeof result}  Reason:  Converted type using number Method  `);
;
result= Number(false)
console.log(`4 Given value is Boolean = false and  Result is : ${result} and type is: ${typeof result}  Reason:  Converted type using number Method  `);


console.log(`===========================Performing Invalid Operation==========================`);

result= Number('hello');
console.log(`1 Given value is String = 'hello' and  Result is : ${result} and   Reason:  we are Performing Invalid Operation  `);

result= Number(undefined);
console.log(`2 Given value is:undefined and  Result is : ${result} and   Reason:  we are Performing Invalid Operation  `);


result= Number(NaN);
console.log(`3 Given value is:NaN and  Result is : ${result} and   Reason:  we are Performing Invalid Operation  `);
