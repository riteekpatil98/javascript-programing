console.log(`==================Switch Case=====================`);

function monthOfYear(num) {
  switch (num) {
    case 1:
      console.log(`Given number is ${num} And Month is "January"`);

      break;
    case 2:
      console.log(`Given number is ${num} And Month is "February"`);

      break;
    case 3:
      console.log(`Given number is ${num} And Month is "March"`);

      break;
    case 4:
      console.log(`Given number is ${num} And Month is "April"`);

      break;
    case 5:
      console.log(`Given number is ${num} And Month is "May"`);

      break;
    case 6:
      console.log(`Given number is ${num} And Month is "June"`);

      break;
    case 7:
      console.log(`Given number is ${num} And Month is "July"`);

      break;
    case 8:
      console.log(`Given number is ${num} And Month is "August"`);

      break;
    case 9:
      console.log(`Given number is ${num} And Month is "September"`);

      break;
    case 10:
      console.log(`Given number is ${num} And Month is "September"`);

      break;
    case 11:
      console.log(` Given number is ${num} And Month is "November"`);
      break;

    case 12:
      console.log(`Given number is ${num} And Month is "December"`);
      break;

    default:
      console.log(`Given number is ${num} And You have Enter Invalid Number"`);

      break;
  }
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
