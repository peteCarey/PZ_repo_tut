import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { CazanaService } from '../cazana/cazana.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private cazanaService: CazanaService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this.cazanaService.getEvent(+route.params['id']);

    if (!eventExists) this.router.navigate(['/404']);
    return eventExists;
  }
}
