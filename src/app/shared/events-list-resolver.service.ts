import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs';
import { CazanaService } from '../cazana/cazana.service';

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private cazanaService: CazanaService) {}
  resolve() {
    return this.cazanaService.getEvents().pipe(map((events) => events));
  }
}
