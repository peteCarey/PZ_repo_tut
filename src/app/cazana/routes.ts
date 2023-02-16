import { Routes } from '@angular/router';
import { CazanaFormComponent } from './cazana-form.component';
import { AdvertisedForSaleComponent } from './advertised-for-sale.component';
import { EventsListComponent } from '../events/events-list.component';
import { EventDetailsComponent } from '../event-details/event-details.component';
import { CreateEventComponent } from '../events/create-event.component';
import { Error404Component } from '../errors/404.component';
import { EventRouteActivator } from '../event-details/event-route-activator.service';
import { EventListResolver } from '../shared/events-list-resolver.service';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  { path: 'cazana', component: CazanaFormComponent },
  // { path: 'advertised', component: AdvertisedForSaleComponent },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver },
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator],
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/cazana', pathMatch: 'full' },
];
