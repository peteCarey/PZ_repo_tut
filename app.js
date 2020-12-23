var registrationDate;
var regMths;
var regYears;
var a, b, c;
var olderMth;
var olderYr;
var moreRecentMth;
var moreRecentYr;
var durMonths;
var durYears;
var regDurMonths;
var regDurYears;
var totalRegMonthsToVRMchange;
var totalDurYears;
var remainderDurMths;
var totalDurMonths;
var mileage;
var averageMileage;
var noMileageProvidedCalc;
var mot_mileage;
var approx_mileage;
var vehicle_ave_mileage;
var previousKnownMileage;
var mileageOnSale;
function subtract(moreRecentDate, olderDate, whereTo) {
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
    a = String(document.getElementById(moreRecentDate).value);
    moreRecentMth = a.substr(0, 2);
    moreRecentYr = a.slice(2, 6);
    b = String(document.getElementById(olderDate).value);
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
    document.getElementById(whereTo).value =
        totalDurYears + " years " + remainderDurMths + " months";
}
function calculateMileage(mileage, whereTo) {
    averageMileage = Math.trunc(mileage / totalDurMonths) * 12;
    document.getElementById(whereTo).value = String(averageMileage);
}
function calculateTotalAverageMileage(whereTo) {
    var olderDate;
    var moreRecentDate;
    vehicle_ave_mileage = 0;
    mileageOnSale = 0;
    mot_mileage = Number(document.getElementById("mot_mileage").value);
    mileageOnSale = Number(document.getElementById("mileage_onAdvert").value);
    console.info("mot_mileage is " + mot_mileage);
    if (mot_mileage > 0) {
        // get duration period date of last mot until VRM changed
        olderDate = "mot_date";
        moreRecentDate = "vrm_change_date";
        previousKnownMileage = mot_mileage;
    }
    if (mot_mileage == 0) {
        olderDate = "date_advertised";
        moreRecentDate = "vrm_change_date";
        previousKnownMileage = Number(document.getElementById("mileage_onAdvert").value);
    }
    if (mot_mileage == 0 && mileageOnSale == 0) {
        olderDate = "regnDate";
        moreRecentDate = "vrm_change_date";
        previousKnownMileage = 0;
    }
    a = String(document.getElementById(moreRecentDate).value);
    moreRecentMth = a.substr(0, 2);
    moreRecentYr = a.slice(2, 6);
    b = String(document.getElementById(olderDate).value);
    olderMth = b.substr(0, 2);
    olderYr = b.slice(2, 6);
    durMonths = moreRecentMth - olderMth;
    durYears = moreRecentYr - olderYr;
    // convert to months
    totalDurMonths = durYears * 12;
    totalDurMonths = totalDurMonths + durMonths;
    totalDurYears = Math.trunc(totalDurMonths / 12);
    noMileageProvidedCalc = Math.trunc((totalDurMonths / 12) * 7900);
    console.info("noMileageProvidedCalc is " + noMileageProvidedCalc);
    approx_mileage = noMileageProvidedCalc + previousKnownMileage; // gives total mileage for the vehicle
    console.log("approx_mileage is " + approx_mileage);
    // need to divide by date of vrm change from date of registration
    subtract("vrm_change_date", "regnDate", "vrm_duration"); // obtain totalDurMonths
    console.log("totalDurMonths is " + totalDurMonths);
    vehicle_ave_mileage = (approx_mileage / totalDurMonths) * 12;
    console.log("vehicle_ave_mileage is " + Math.trunc(vehicle_ave_mileage));
    document.getElementById(whereTo).value = String(Math.trunc(vehicle_ave_mileage));
}
