// author Peter Carey December 2020
interface Car {
  id: number;
  vrm: string;
  make: string;
  model: string;
  getAnnualMileage?: () => number;
  getTotalMileage?: () => number;
  getCarAge?();
  getDateRegistered?();
}

let registrationDate: string;
let regMths: number;
let regYears: number;
let a, b, c;
let olderMth: number;
let olderYr: number;
let moreRecentMth: number;
let moreRecentYr: number;
let durMonths: number;
let durYears: number;
let regDurMonths: number;
let regDurYears: number;
let totalRegMonthsToVRMchange: number;
let totalDurYears;
let remainderDurMths;
let totalDurMonths: number;
let mileage: number;
let averageMileage: number;
let noMileageProvidedCalc: number;
let mot_mileage: number;
let approx_mileage: number;
let vehicle_ave_mileage: number;
let previousKnownMileage: number;
let mileageOnSale: number;

function getDuration(moreRecentDate, olderDate, whereTo) {
  a = 0;
  b = 0;
  registrationDate = "";
  olderMth = 0;
  olderYr = 0;
  moreRecentMth = 0;
  moreRecentYr = 0;
  durMonths = 0;
  durYears = 0;
  totalDurYears = 0;
  remainderDurMths = 0;
  totalDurMonths = 0;

  a = String((<HTMLInputElement>document.getElementById(moreRecentDate)).value);
  moreRecentMth = a.substr(0, 2);
  moreRecentYr = a.slice(2, 6);

  b = String((<HTMLInputElement>document.getElementById(olderDate)).value);
  olderMth = b.substr(0, 2);
  olderYr = b.slice(2, 6);

  durMonths = moreRecentMth - olderMth;
  durYears = moreRecentYr - olderYr;

  // convert to months
  totalDurMonths = durYears * 12;
  totalDurMonths = totalDurMonths + durMonths;
  totalDurYears = Math.trunc(totalDurMonths / 12);

  // find out remainder
  remainderDurMths = totalDurMonths % 12;
  (<HTMLInputElement>document.getElementById(whereTo)).value =
    totalDurYears + " years " + remainderDurMths + " months";
}

function calculateMileage(mileage, whereTo) {
  averageMileage = Math.trunc(mileage / totalDurMonths) * 12;
  (<HTMLInputElement>document.getElementById(whereTo)).value = String(
    averageMileage
  );
}

function calculateTotalAverageMileage(whereTo) {
  let olderDate: string;
  let moreRecentDate: string;
  vehicle_ave_mileage = 0;
  mileageOnSale = 0;
  mot_mileage = Number(
    (<HTMLInputElement>document.getElementById("mot_mileage")).value
  );
  mileageOnSale = Number(
    (<HTMLInputElement>document.getElementById("mileage_onAdvert")).value
  );

  if (mot_mileage > 0) {
    // get duration period date of last mot until VRM changed
    olderDate = "mot_date";
    moreRecentDate = "vrm_change_date";
    previousKnownMileage = mot_mileage;
  }
  if (mot_mileage == 0) {
    olderDate = "date_advertised";
    moreRecentDate = "vrm_change_date";
    previousKnownMileage = Number(
      (<HTMLInputElement>document.getElementById("mileage_onAdvert")).value
    );
  }
  if (mot_mileage == 0 && mileageOnSale == 0) {
    olderDate = "regnDate";
    moreRecentDate = "vrm_change_date";
    previousKnownMileage = 0;
  }
  a = String((<HTMLInputElement>document.getElementById(moreRecentDate)).value);
  moreRecentMth = a.substr(0, 2);
  moreRecentYr = a.slice(2, 6);

  b = String((<HTMLInputElement>document.getElementById(olderDate)).value);
  olderMth = b.substr(0, 2);
  olderYr = b.slice(2, 6);

  durMonths = moreRecentMth - olderMth;
  durYears = moreRecentYr - olderYr;

  // convert to months
  totalDurMonths = durYears * 12;
  totalDurMonths = totalDurMonths + durMonths;
  totalDurYears = Math.trunc(totalDurMonths / 12);

  noMileageProvidedCalc = Math.trunc((totalDurMonths / 12) * 7900);
  approx_mileage = noMileageProvidedCalc + previousKnownMileage; // gives total mileage for the vehicle

  // need to divide by date of vrm change from date of registration
  getDuration("vrm_change_date", "regnDate", "vrm_duration"); // obtain totalDurMonths
  vehicle_ave_mileage = (approx_mileage / totalDurMonths) * 12;
  (<HTMLInputElement>document.getElementById(whereTo)).value = String(
    Math.trunc(vehicle_ave_mileage)
  );
}
