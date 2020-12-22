// Import stylesheets
// import "./style.css";
var RegistrationDate; //092018
RegistrationDate = 0;
var jaguar = {
    id: 1234,
    vrm: "PK68ORO",
    make: "Jaguar",
    model: "xe",
    // RegistrationDate: "30/09/2018",
    getAnnualMileage: function () {
        return 7800;
    },
    getCarAge: function () {
        var chosenDate; //032021
        var carAge;
        var reg_months; // first 2 numbers
        var reg_years; // last 4 numbers
        var chosen_months;
        var chosen_years;
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
    var a, b, c;
    var olderMth = 0;
    var olderYr = 0;
    var moreRecentMth = 0;
    var moreRecentYr = 0;
    var durMonths = 0;
    var durYears = 0;
    var totalDurMonths = 0;
    var totalDurYears = 0;
    var remainderDurMths = 0;
    a = 0;
    b = 0;
    c = 0;
    a = String(document.getElementById(olderDate).value);
    olderMth = a.substr(0, 2);
    console.info("olderMth is " + olderMth);
    olderYr = a.slice(2, 6);
    console.info("olderYr is " + olderYr);
    b = String(document.getElementById(moreRecentDate).value);
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
    document.getElementById(whereTo).value =
        totalDurYears + " years and " + remainderDurMths + " months";
}
function myFunction(id) {
    console.log("test" + id);
}
function splitText(value, index) {
    if (value.length < index) {
        return value;
    }
    return [value.substring(0, index)].concat(splitText(value.substring(index), index));
}
