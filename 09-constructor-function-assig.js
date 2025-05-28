function Bank(bankName, location, ifscCode, branchCode) {
  this.bankName = bankName;
  this.location = location;
  this.ifscCode = ifscCode;
  this.branchCode = branchCode;
  Bank.prototype.details = function () {
    console.log(
      ` Bank Details:-> Bank Name is: ${this.bankName} , Bank Location: ${location}, IFSC code: ${ifscCode} , Branch Code : ${branchCode}`
    );
  };
}
console.log(
  `<------------------------------------------------------------------------>`
);

let yesBank = new Bank("Yes Bank", "Mumbai, Maharashtra", "YESB0000045", 3445);
yesBank.details();

console.log(
  `<------------------------------------------------------------------------>`
);
let sbiBank = new Bank("SBI Bank", "Delhi, India", "SBIN0001725", 1725);
sbiBank.details();

console.log(
  `<----------------------------------------------------------------------->`
);
let mahBank = new Bank("Mah Bank", "Pune, Maharashtra", "MAHB0000123", 2346);
mahBank.details();

console.log(
  `<------------------------------------------------------------------------>`
);
let axisBank = new Bank(
  "Axis Bank",
  "Bengaluru,Karnataka",
  "UTIB0000786",
  1876
);
axisBank.details();

Bank.prototype.openTime = "9 AM IST";

Bank.prototype.closeTime = "6 PM IST";

console.log(
  `<------------------------------------------------------------------------>`
);
console.log(
  `SBI Bank Open Time is : ${sbiBank.openTime} And Closing Time is ${sbiBank.closeTime}`
);

console.log(
  `<------------------------------------------------------------------------>`
);
console.log(
  `Bank Name is : ${axisBank.bankName} ,  Closing Time is : ${axisBank.closeTime}`
);

console.log(
  `<------------------------------------------------------------------------>`
);

console.log(
  `Bank Name is : ${yesBank.bankName} , Branch Code is ; ${yesBank.branchCode} and Open Time is ; ${yesBank.openTime} `
);
