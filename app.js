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
function subtract() {
    var a, b, c;
    var regMth;
    var choseMth;
    var durMonths;
    var durYears;
    var regYr;
    var choseYr;
    var totalDurMonths;
    var totalDurYears;
    var remainderDurMths;
    a = String(document.getElementById("regnDate").value);
    regMth = a.substr(0, 2);
    console.info("regMth is " + regMth);
    regYr = a.slice(2, 6);
    console.info("regYr is " + regYr);
    b = String(document.getElementById("chosenDate").value);
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
    document.getElementById("duration").value =
        totalDurYears + " years and " + remainderDurMths + " months";
}
function myFunction(id) {
    alert("test");
}
function splitText(value, index) {
    if (value.length < index) {
        return value;
    }
    return [value.substring(0, index)].concat(splitText(value.substring(index), index));
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
