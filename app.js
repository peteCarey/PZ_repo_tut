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
    var regYear;
    var chosenMth;
    var chosenYear;
    alert("id is " + id);
    var inputElement = document.getElementById(id);
    console.log(inputElement.id);
    console.log(inputElement.value);
    if (inputElement.id == "regnDate") {
        // RegistrationDate = parseInt(inputElement.value);
        //console.log("reg date is " + RegistrationDate);
        //dates.push(RegistrationDate);
        var regnMonth = inputElement.value.substr(0, 2);
        console.log("regnMonth is " + regnMonth);
        var regnYear = inputElement.value.slice(2, 6);
        console.log("regnYear is " + regnYear);
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
