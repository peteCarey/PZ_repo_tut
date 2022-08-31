import { Component, OnInit } from '@angular/core';
import { Cazana } from '../cazana';

@Component({
  selector: 'app-cazana-form',
  templateUrl: './cazana-form.component.html',
  styleUrls: ['./cazana-form.component.scss'],
})
export class CazanaFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  model = new Cazana(
    18,
    'Dr IQ',
    'Ford',
    'Focus',
    '',
    '',
    0,
    0,
    0,
    0,
    '',
    'Fail',
    0,
    0,
    0,
    0,
    '',
    '',
    '',
    0,
    0,
    0
  );
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newCazana() {
    this.model = new Cazana(
      42,
      'Bloggs',
      'ford',
      'focus',
      '',
      '',
      0,
      0,
      0,
      0,
      '',
      'Fail',
      0,
      0,
      0,
      0,
      '',
      '',
      '',
      0,
      0,
      0
    );
  }

  getDuration(value: any, whichDate: string) {
    console.log(value);

    // If (value = "MOT"){}

    var registrationDate = this.model.registrationDate;
    var regDate = registrationDate.split('/');
    var regMonth = regDate[0];
    var regYear = regDate[1];
    var registrationYear: number = parseInt(regYear);
    var registrationMonths: number = parseInt(regMonth);

    console.log(this.model.registrationDate);
    var advertDate = value;
    var adDate = advertDate.split('/');
    var adMonth = adDate[0];
    var adYear = adDate[1];
    var advertYear: number = parseInt(adYear);
    var advertMonths: number = parseInt(adMonth);

    console.log(adMonth);
    console.log(adYear);
    debugger;
    var motDate = this.model.dateOfMot.split('/');
    var motMonth = motDate[0];
    var motYear = motDate[1];
    var motorTaxYear: number = parseInt(motYear);
    console.log('motorTaxYear is ', motorTaxYear);
    var additionalMotMonths: number = parseInt(motMonth);

    var durMonths: number =
      (advertYear - registrationYear) * 12 +
      (advertMonths - registrationMonths);
    var motMonths: number =
      (motorTaxYear - registrationYear) * 12 +
      (additionalMotMonths - registrationMonths);
    // up to here
    console.log('mot months is ' + motMonths);
    console.log('durMonths is ' + durMonths);
    this.model.durationFromReg = durMonths;
    this.model.durationFromRegMot = motMonths;
    console.log(this.model.mileageMot);

    var adAveMileage: number = (this.model.mileageAdvertised / durMonths) * 12;
    console.log(typeof adAveMileage);
    this.model.averageAdMileage = Math.round(adAveMileage);

    var motAveMileage: number = (this.model.mileageMot / motMonths) * 12;
    this.model.averageMotMileage = Math.round(motAveMileage);
  }

  calculateMileage() {
    console.log(this.model.mileageMot);
  }
}
