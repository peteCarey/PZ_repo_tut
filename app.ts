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
let a, b, c;
let olderMth: number;
let olderYr: number;
let moreRecentMth: number;
let moreRecentYr: number;
let durMonths: number;
let durYears: number;

let totalDurYears;
let remainderDurMths;

let totalDurMonths: number;
let mileage: number;
let averageMileage: number;
let noMileageProvidedCalc: number;
let mot_mileage: number;
let approx_mileage: number;

console.log(jaguar.vrm);
console.log(jaguar.model);
console.log(jaguar.getAnnualMileage());

function subtract(olderDate, moreRecentDate, whereTo) {
  console.log("olderDate is " + olderDate);
  console.log(moreRecentDate);
  console.log("whereTo is " + whereTo);
  debugger;

  a = 0;
  b = 0;
  c = 0;
  olderMth = 0;
  olderYr = 0;
  moreRecentMth = 0;
  moreRecentYr = 0;
  durMonths = 0;
  durYears = 0;

  totalDurYears = 0;
  remainderDurMths = 0;
  totalDurMonths = 0;

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
  // find out remainder
  remainderDurMths = totalDurMonths % 12;
  /*
  if (remainderDurMths > 0) {
    totalDurYears = totalDurYears - 1;
  }
  */
  console.info("remainderDurMths " + remainderDurMths);
  (<HTMLInputElement>document.getElementById(whereTo)).value =
    totalDurYears + " years " + remainderDurMths + " months";
}

function calculateMileage(mileage, whereTo) {
  debugger;
  console.log("mileage is " + mileage);
  console.log("totalDurMonths is " + totalDurMonths);

  averageMileage = Math.trunc(mileage / totalDurMonths) * 12;
  console.log("averageMileage is " + averageMileage);
  (<HTMLInputElement>document.getElementById(whereTo)).value = String(
    averageMileage
  );
}

function calculateDurationMonths(moreRecentDate, olderDate) {
  noMileageProvidedCalc = 0;
  mot_mileage = 0;
  approx_mileage = 0;
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
  noMileageProvidedCalc = Math.trunc((totalDurMonths / 12) * 7900);
  console.log("noMileageProvidedCalc is " + noMileageProvidedCalc);
  mot_mileage = Number(
    (<HTMLInputElement>document.getElementById("mot_mileage")).value
  );
  console.log("mot_mileage is " + mot_mileage);
  approx_mileage = noMileageProvidedCalc + mot_mileage;
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
