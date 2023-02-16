import { Component, OnInit } from '@angular/core';
import { CazanaService } from '../cazana/cazana.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
  events: any;

  handleEventClicked(data: any) {
    console.log('received:', data);
  }
  constructor(
    private cazanaService: CazanaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.events = this.cazanaService.getEvents();
    // this.cazanaService.getEvents().subscribe((events) => {
    // this.events = events;
    this.events = this.route.snapshot.data['events'];
  }
}
