// Import stylesheets
// import "./style.css";
/*
const form: HTMLFormElement = document.querySelector("#myForm");

form.onsubmit = () => {
  const formData = new FormData(form);

  console.log(formData);
  const text = formData.get("regnDate") as string;
  console.log(text);
  return false; // prevent reload
};
*/
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
    /*  regMth = inputElement.value.substr(0, 2);
      console.log("regMth is " + regMth);
      regnMonth = parseInt(regMth);
      console.log("reg Month is " + regnMonth);
      regYr = inputElement.value.slice(2, 6);
      regnYear = parseInt(regYr);
      console.log("regnYear is " + regnYear);*/
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
    durYears = choseYr - regYr;
    console.log("durYears is " + durYears);
    document.getElementById("duration").value =
        durYears + " years and " + durMonths + " months";
}
function myFunction(id) {
    alert("test");
}
/*
function myFunction(id) {
  //let dates = [];
  let regMth: string;
  let regnMonth: number;
  let regYr: string;
  let regnYear: number;
  let choseMth: string;
  let chosenMonth: number;
  let choseYr: string;
  let chosenYear: number;
  let duration_months: number;
  console.log("id is " + id);
  let inputElement = <HTMLInputElement>document.getElementById(id);
  console.log(inputElement.id);
  console.log(inputElement.value);
 
  if (inputElement.id == "regnDate") {
    regMth = inputElement.value.substr(0, 2);
    console.log("regMth is " + regMth);
    regnMonth = parseInt(regMth);
    console.log("reg Month is " + regnMonth);
    regYr = inputElement.value.slice(2, 6);
    regnYear = parseInt(regYr);
    console.log("regnYear is " + regnYear);
  }
  if (inputElement.id == "chosenDate") {
    
    choseMth = inputElement.value.substr(0, 2);
    console.log("choseMth is " + choseMth);
    chosenMonth = parseInt(choseMth);
    console.log("chosen Month is " + chosenMonth);

    choseYr = inputElement.value.slice(2, 6);
    chosenYear = parseInt(choseYr);
    console.log("chosen Year is " + chosenYear);
  }

  //let inputElement = <HTMLInputElement>document.getElementById(id);
  console.info("chosenMonth is " + chosenMonth);
  console.info("regnMonth is " + regnMonth);
  duration_months = chosenMonth - regnMonth;
  //duration_months = parseInt(durMonths);
  console.log("duration_months is " + duration_months);
  if (inputElement.id == "duration") {
   
    let total_dur = String(duration_months);
    console.log("total_dur is " + total_dur);
    inputElement.value = total_dur;
    console.info(typeof inputElement.value);
  }
}
*/
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
