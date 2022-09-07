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
    '123456789',
    'Ford',
    'Focus',
    '',
    '',
    0,
    '',
    0,
    0,
    '',
    'Fail',
    '',
    0,
    0,
    '',
    '',
    '',
    0,
    '',
    0
  );
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newCazana() {
    this.model = new Cazana(
      42,
      '123456789',
      'ford',
      'focus',
      '',
      '',
      0,
      '',
      0,
      0,
      '',
      'Fail',
      '',
      0,
      0,
      '',
      '',
      '',
      0,
      '',
      0
    );
  }

  getDuration() {
    //console.log(value);

    // If (value = "MOT"){}
    debugger;
    // registration
    let registrationDate = this.model.registrationDate;
    let regDate = registrationDate.split('/');
    let regMonth = regDate[0];
    let regYear = regDate[1];
    let registrationYear: number = parseInt(regYear);
    let registrationMonths: number = parseInt(regMonth);
    console.log(this.model.registrationDate);

    // Advertised
    let advertDate = this.model.dateAdvertised;
    let adDate = advertDate.split('/');
    let adMonth = adDate[0];
    let adYear = adDate[1];
    let advertYear: number = parseInt(adYear);
    let advertMonths: number = parseInt(adMonth);
    console.log((advertYear - registrationYear) * 12);
    console.log(advertMonths - registrationMonths);
    let durMonths: number =
      (advertYear - registrationYear) * 12 +
      (advertMonths - registrationMonths);
    console.log(durMonths);

    console.log(advertYear - registrationYear);
    let adAveMileage: number =
      (Number(this.model.mileageAdvertised) * 12) / durMonths;
    this.model.averageAdMileage = Math.round(adAveMileage);
    console.log('durMonths is ' + durMonths);
    this.model.durationFromReg = durMonths;

    // MOT

    let motDate = this.model.dateOfMot.split('/');
    let motMonth = motDate[0];
    let motYear = motDate[1];
    let motorTaxYear: number = parseInt(motYear);
    console.log('motorTaxYear is ', motorTaxYear);
    let motMonths: number = parseInt(motMonth);
    let motDurMonths: number =
      (motorTaxYear - registrationYear) * 12 + (motMonths - registrationMonths);
    console.log('mot months is ' + motMonths);
    this.model.durationFromRegMot = motDurMonths;

    console.log(this.model.mileageMot);
    // if (typeof this.model.mileageMot === 'number') {
    let motAveMileage: number =
      (Number(this.model.mileageMot) * 12) / motDurMonths;
    this.model.averageMotMileage = Math.round(motAveMileage);
    //  }

    // VRM
    let vrmDate = this.model.dateOfChange.split('/');
    let vrmMonth = vrmDate[0];
    let vrmYear = vrmDate[1];
    let vrmChangeYear: number = parseInt(vrmYear);
    console.log('vrm change Year is ', vrmChangeYear);

    let vrmMonths: number = parseInt(vrmMonth);
    let vrmDurMonths: number =
      (vrmChangeYear - registrationYear) * 12 +
      (vrmMonths - registrationMonths);
    this.model.durationFromRegVrm = vrmDurMonths;
    debugger;
    //   if (typeof this.model.mileageVrm === 'number') {
    let vrmAveMileage: number =
      (Number(this.model.mileageVrm) * 12) / vrmDurMonths;
    this.model.averageVrmMileage = Math.round(vrmAveMileage);
    //  }
  }
  calculateMileage() {
    console.log(this.model.mileageMot);
  }
}
