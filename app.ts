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

function subtract(olderDate, moreRecentDate, whereTo) {
  console.log("olderDate is " + olderDate);
  console.log(moreRecentDate);
  console.log("whereTo is " + whereTo);
  debugger;
  let a, b, c;
  let olderMth: number = 0;
  let olderYr: number = 0;
  let moreRecentMth: number = 0;
  let moreRecentYr: number = 0;
  let durMonths: number = 0;
  let durYears: number = 0;
  let totalDurMonths: number = 0;
  let totalDurYears: number = 0;
  let remainderDurMths: number = 0;
  a = 0;
  b = 0;
  c = 0;

  a = String((<HTMLInputElement>document.getElementById(olderDate)).value);
  olderMth = a.substr(0, 2);
  console.info("olderMth is " + olderMth);
  olderYr = a.slice(2, 6);
  console.info("olderYr is " + olderYr);

  b = String((<HTMLInputElement>document.getElementById(moreRecentDate)).value);
  moreRecentMth = b.substr(0, 2);
  console.log("(moreRecentMth is " + moreRecentMth);
  moreRecentYr = b.slice(2, 6);
  console.log("moreRecentYr is " + moreRecentYr);
  durMonths = moreRecentMth - olderMth;
  console.log("durMonths is " + durMonths);
  durYears = moreRecentYr - olderYr;
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
  */
  console.info("remainderDurMths " + remainderDurMths);
  (<HTMLInputElement>document.getElementById(whereTo)).value =
    totalDurYears + " years and " + remainderDurMths + " months";
}

function myFunction(id) {
  console.log("test" + id);
}

function splitText(value, index) {
  if (value.length < index) {
    return value;
  }
  return [value.substring(0, index)].concat(
    splitText(value.substring(index), index)
  );
}
