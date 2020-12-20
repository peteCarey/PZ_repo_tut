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
function myFunction(id) {
    //let dates = [];
    var regMth;
    var regnMonth;
    var regYr;
    var regnYear;
    var choseMth;
    var chosenMonth;
    var choseYr;
    var chosenYear;
    var duration_months;
    console.log("id is " + id);
    var inputElement = document.getElementById(id);
    console.log(inputElement.id);
    console.log(inputElement.value);
    if (inputElement.id == "regnDate") {
        // RegistrationDate = parseInt(inputElement.value);
        //console.log("reg date is " + RegistrationDate);
        //dates.push(RegistrationDate);
        regMth = inputElement.value.substr(0, 2);
        regnMonth = parseInt(regMth);
        console.log("reg Month is " + regnMonth);
        regYr = inputElement.value.slice(2, 6);
        regnYear = parseInt(regYr);
        console.log("regnYear is " + regnYear);
    }
    if (inputElement.id == "chosenDate") {
        // RegistrationDate = parseInt(inputElement.value);
        //console.log("reg date is " + RegistrationDate);
        //dates.push(RegistrationDate);
        choseMth = inputElement.value.substr(0, 2);
        chosenMonth = parseInt(choseMth);
        console.log("chosen Month is " + chosenMonth);
        choseYr = inputElement.value.slice(2, 6);
        chosenYear = parseInt(choseYr);
        console.log("chosen Year is " + chosenYear);
    }
    //let inputElement = <HTMLInputElement>document.getElementById(id);
    duration_months = chosenMonth - regnMonth;
    //duration_months = parseInt(durMonths);
    console.log("duration_months is " + duration_months);
    if (inputElement.id == "duration") {
        /*<HTMLInputElement>document.getElementById(id).value = duration_months;
        let inputValue = (<HTMLInputElement>document.getElementById("duration")).value;
        */
        var total_dur = String(duration_months);
        inputElement.value = total_dur;
    }
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
