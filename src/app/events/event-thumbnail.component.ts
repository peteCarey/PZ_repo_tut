import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss'],
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();

  someProperty: any = 'some value';

  handleClickMe() {
    //console.log('clicked!');
    this.eventClick.emit(this.event.name);
  }

  logFoo() {
    console.log('foo');
  }

  constructor() {}

  ngOnInit(): void {}
}
