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
    let total_dur = String(duration_months);
    inputElement.value = total_dur;
  }
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
