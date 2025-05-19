console.log(`=================5 to 15 increment==============`);

for (let index = 5; index <= 15; index++) {
  console.log(index);
}

console.log(`=================50 to  40 decrement==============`);

for (let index = 50; index >= 40; index--) {
  console.log(index);
}

console.log(`=================First 15 odd number==============`);

for (let index = 1; index <= 30; index++) {
  if (index % 2 != 0) {
    console.log(index);
  }
}

console.log(`=================First 10 Even number==============`);

for (let index = 2; index <= 20; index++) {
  if (index % 2 == 0) {
    console.log(index);
  }
}

console.log(`=================Table of 5 ==============`);

for (let index = 1; index <= 10; index++) {
  console.log(index * 5);
}

console.log(`=================Table of 10==============`);

for (let index = 1; index <= 10; index++) {
  console.log(index * 10);
}

console.log(`=================Revere Table of 10==============`);

for (let index = 10; index >= 1; index--) {
  console.log(index * 10);
}
