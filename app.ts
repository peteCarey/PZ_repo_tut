// Import stylesheets
// import "./style.css";
let RegistrationDate: number; //092018
RegistrationDate = 0;
interface Car {
  id: number;
  vrm: string;
  make: string;
  model: string;
  // RegistrationDate: string;
  getAnnualMileage?: () => number;
  getTotalMileage?: () => number;
  getCarAge?();
  getDateRegistered?();
}

interface CarService {
  /*  
  add(jaguar: Car): Car;
  delete(jaguar: Car): void;
  getAll(): Car[];
  getById(carId: number): Car;
*/
}

var jaguar: Car = {
  id: 1234,
  vrm: "PK68ORO",
  make: "Jaguar",
  model: "xe",
  // RegistrationDate: "30/09/2018",
  getAnnualMileage() {
    return 7800;
  },

  getCarAge() {
    let chosenDate: number; //032021
    let carAge: number;

    let reg_months: number; // first 2 numbers
    let reg_years: number; // last 4 numbers
    let chosen_months: number;
    let chosen_years: number;

    // carAge = chosenDate - RegistrationDate;
  },
};

console.log(jaguar.vrm);
console.log(jaguar.model);
console.log(jaguar.getAnnualMileage());

function subtract() {
  let a, b, c;
  let regMth: number;
  let choseMth: number;
  let durMonths: number;
  let durYears: number;
  let regYr: number;
  let choseYr: number;
  let totalDurMonths: number;
  let totalDurYears: number;
  let remainderDurMths: number;

  a = String((<HTMLInputElement>document.getElementById("regnDate")).value);
  regMth = a.substr(0, 2);
  console.info("regMth is " + regMth);
  regYr = a.slice(2, 6);
  console.info("regYr is " + regYr);

  b = String((<HTMLInputElement>document.getElementById("chosenDate")).value);
  choseMth = b.substr(0, 2);
  console.log("choseMth is " + choseMth);

  choseYr = b.slice(2, 6);
  // chosenYear = parseInt(choseYr);
  console.log("choseYr is " + choseYr);

  c = b - a;
  console.log("c is " + c);
  //(<HTMLInputElement>document.getElementById("duration")).value = c;
  durMonths = choseMth - regMth;
  // chosenMonth = parseInt(choseMth);
  console.log("durMonths is " + durMonths);
  debugger;
  durYears = choseYr - regYr;
  console.log("durYears is " + durYears);
  // convert to months
  totalDurMonths = durYears * 12;
  totalDurMonths = totalDurMonths + durMonths;
  console.info("totalDurMonths is " + totalDurMonths);
  totalDurYears = Math.trunc(totalDurMonths / 12);
  console.info("totalDurYears " + totalDurYears);
  remainderDurMths = totalDurMonths % 12;
  /*
  if (remainderDurMths > 0) {
    totalDurYears = totalDurYears - 1;
  }
  console.info("totalDurYears now is " + totalDurYears);
  */
  console.info("remainderDurMths " + remainderDurMths);
  (<HTMLInputElement>document.getElementById("duration")).value =
    totalDurYears + " years and " + remainderDurMths + " months";
}

function myFunction(id) {
  alert("test");
}

function splitText(value, index) {
  if (value.length < index) {
    return value;
  }
  return [value.substring(0, index)].concat(
    splitText(value.substring(index), index)
  );
}

//let nameValidationInput = document.getElementById("myForm.regnDate");
/*
function useValue() {
  alert("test");
  //  let NameValue = (<HTMLInputElement>document.getElementById("myForm.regnDate"))
  //    .value;
  // use it
  /*  alert(NameValue);

  // just to show the new value*/
//}
// nameValidationInput.onchange = useValue;
// nameValidationInput.onblur = useValue;
