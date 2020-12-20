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
  let regMth: number;
  let regYear: number;
  let chosenMth: number;
  let chosenYear: number;
  console.log("id is " + id);
  let inputElement = <HTMLInputElement>document.getElementById(id);
  console.log(inputElement.id);
  console.log(inputElement.value);
  if (inputElement.id == "regnDate") {
    // RegistrationDate = parseInt(inputElement.value);
    //console.log("reg date is " + RegistrationDate);
    //dates.push(RegistrationDate);
    let RegnMonth = inputElement.value.substr(0, 2);
    regMth = parseInt(RegnMonth);
    console.log("reg Month is " + regMth);
    let regnYear = inputElement.value.slice(2, 6);
    console.log("regnYear is " + regnYear);
    let regYear = parseInt(regnYear);
  }
  if (inputElement.id == "chosenDate") {
    // RegistrationDate = parseInt(inputElement.value);
    //console.log("reg date is " + RegistrationDate);
    //dates.push(RegistrationDate);
    let chosenDate = inputElement.value.substr(0, 2);
    let choseDte: number;
    choseDte = parseInt(chosenDate);
    console.log("chosen Date is " + choseDte);
    let chosenYear = inputElement.value.slice(2, 6);

    let choseYr = parseInt(chosenYear);
    console.log("chosen Year is " + choseYr);
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
