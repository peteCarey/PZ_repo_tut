import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Cazana } from '../cazana';

@Component({
  selector: 'advertised-for-sale',
  templateUrl: './advertised-for-sale.component.html',
})
export class AdvertisedForSaleComponent {
  @Input() event: any;
  someProperty: any = 'some value';

  logFoo() {
    console.log('foo');
  }
  @Output() eventClick = new EventEmitter();

  event1 = {
    id: 1,
    name: 'red tibetan',
  };

  id: number = 1;
  price: number = 0;
  durationFromReg: number = 0;

  model = new Cazana(
    this.id,
    '',
    '',
    '',
    '',
    '',
    this.price,
    '',
    this.durationFromReg,
    0,
    '',
    '',
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

  toggle() {
    console.log('clicked');
    this.eventClick.emit('foo');
    //this.isShow = !this.isShow;
    // this.el.toArray()[i].nativeElement.classList.toggle('active');
    // const panel = this.el.toArray()[i].nativeElement.nextElementSibling;
  }

  getDuration() {
    console.log('test');
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
    let durMonths: string | number =
      (advertYear - registrationYear) * 12 +
      (advertMonths - registrationMonths);
    console.log(durMonths);

    console.log(advertYear - registrationYear);
    let adAveMileage: number =
      (Number(this.model.mileageAdvertised) * 12) / durMonths;
    this.model.averageAdMileage = Math.round(adAveMileage);
    console.log('durMonths is ' + typeof durMonths);
    debugger;
    if (durMonths === NaN) {
      durMonths = '';
    } else {
      this.model.durationFromReg = durMonths;
    }
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

    // VRN Vehicle Registration Number (plate)
    let vrnDate = this.model.dateOfChange.split('/');
    let vrnMonth = vrnDate[0];
    let vrnYear = vrnDate[1];
    let vrnChangeYear: number = parseInt(vrnYear);
    console.log('vrn change Year is ', vrnChangeYear);

    let vrnMonths: number = parseInt(vrnMonth);
    let vrnDurMonths: number =
      (vrnChangeYear - registrationYear) * 12 +
      (vrnMonths - registrationMonths);
    this.model.durationFromRegVrn = vrnDurMonths;
    //   if (typeof this.model.mileagevrn === 'number') {
    let vrnAveMileage: number =
      (Number(this.model.mileageVrn) * 12) / vrnDurMonths;
    this.model.averageVrnMileage = Math.round(vrnAveMileage);
    //  }
  }
}
