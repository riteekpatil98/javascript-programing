var voteEligible = function (age) {
  if (age == null || age <= 0 || age > 130) {
    console.log(`Hey You have Enter Invalid data is : ${age}`);
  } else if (age < 18) {
    console.log(` Hey your Age is : ${age}  you are NOT Eligible for Vote`);
  } else {
    console.log(` Hey your Age is : ${age}  you are Eligible for Vote`);
  }
};
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);
