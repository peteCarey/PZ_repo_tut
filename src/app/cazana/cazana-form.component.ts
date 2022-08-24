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
    '',
    '',
    ''
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
      '',
      '',
      ''
    );
  }
}
