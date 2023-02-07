import { Component, OnInit } from '@angular/core';
import { CazanaService } from '../cazana/cazana.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(
    private cazanaService: CazanaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.event = this.cazanaService.getEvent(+this.route.snapshot.params['id']);
  }
}
