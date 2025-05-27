console.log(
  `--------------------------------------------Task One-----------------------------------------------`
);

class vehicle {
  //data member
  name;
  color;
  model;
  cc;
  mileage;
  // constructor
  constructor(name, color, model, cc, mileage) {
    this.name = name;
    this.color = color;
    this.model = model;
    this.cc = cc;
    this.mileage = mileage;
  }
  //method
  details() {
    console.log(
      `Bike name -> ${this.name} , Color -> ${this.color} , Bike Model -> ${this.model} , CC -> ${this.cc} , Mileage -> ${this.mileage}`
    );
  }
}

let objectOne = new vehicle("Yamaha", "Blue", 2023, 155, 45);
console.log(
  `==============================Object 1=================================`
);
objectOne.details();

let objectTwo = new vehicle("Honda CBR500R", "Red", 2022, 471, 28);

console.log(
  `==============================Object 2=================================`
);
objectTwo.details();

let objectThree = new vehicle("KTM Duke 390	", "Orange", 2024, 471, 25);
console.log(
  `==============================Object 3=================================`
);
objectThree.details();

let objectfour = new vehicle("Bajaj Pulsar", "Black", 2021, 471, 50);
console.log(
  `==============================Object 4=================================`
);
objectfour.details();

let objectFive = new vehicle("Royal Enfield", "Green", 2025, 471, 35);
console.log(
  `==============================Object 5=================================`
);
objectFive.details();

console.log(
  `---------------------------------------------------------------Task Two-------------------------------------------------------------------`
);

class College {
  //data member
  collName;
  location;
  establishedYears;
  numberOfStud;

  //constructor
  constructor(collName, location, establishedYears, numberOfStud) {
    this.collName = collName;
    this.location = collName;
    this.establishedYears = establishedYears;
    this.numberOfStud = numberOfStud;
  }
  //method

  display() {
    console.log(
      `Collage Name is :- ${this.collName} , Collage Location :- ${this.location} ,  Established Years :- ${this.establishedYears}, Number of Student in college :-  ${this.numberOfStud} `
    );
  }
}

console.log(
  `--------------------------------------------Record One-----------------------------------------------`
);
let obOne = new College("Springfield University", "New York, USA", 1965, 4500);
obOne.display();

console.log(
  `--------------------------------------------Record Two-----------------------------------------------`
);

let obTwo = new College("Green Valley College	", "Austin, Texas", 1980, 3200);
obTwo.display();

console.log(
  `--------------------------------------------Record Three-----------------------------------------------`
);

let obThree = new College("Oceanview Institute	", "San Diego, CA", 1995, 2700);
obTwo.display();

console.log(
  `--------------------------------------------Record Four-----------------------------------------------`
);
let obFour = new College(
  "Highland Tech University",
  "Denver, Colorado",
  2005,
  5100
);
obFour.display();
