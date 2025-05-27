let professor = {
  FullName: "Sundar Pichai",
  age: 48,
  isMarried: true,
  moNumber: 98765432,
  Designation: "CEO",
  degree: {
    engineering: "CSC",
    PHD: "Computing",
    MAster: "MCA",
    Bachelor: "BscIT",
  },
  certificate: [
    "Hacker Rank",
    "Participation",
    "Certification in IFE Course",
    "Certification in Avd Programming",
  ],
};
console.log(
  `=================================Object===================================`
);

console.log(professor);
console.log(
  `=================================Object=Degree==================================`
);
console.log(professor.degree);
console.log(
  `=================================Object=Certificate==================================`
);
console.log(professor.certificate);

console.log(
  `=================================Adding Experience ==================================`
);
professor.totalExperience = "14 years";
console.log(professor);
console.log(
  `=================================Age Modified==================================`
);
professor.age = 52;
console.log(professor);

console.log(
  `=================================Adding Certificate Using splice operator==================================`
);

professor.certificate.splice(2, 0, "Oracle Certification");
console.log(professor.certificate);
console.log(
  `=================================Last Certificate from array==================================`
);
let lastElement = professor.certificate[professor.certificate.length - 1];
console.log(lastElement);
console.log(
  `=================================Object using In Loop==================================`
);
for (const key in professor) {
  let value = professor[key];
  console.log(`Keys: ${key} ==> value: ${value}`);
}
