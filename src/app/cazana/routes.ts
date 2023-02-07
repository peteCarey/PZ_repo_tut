import { Routes } from '@angular/router';
import { CazanaFormComponent } from './cazana-form.component';
import { AdvertisedForSaleComponent } from './advertised-for-sale.component';
import { EventsListComponent } from '../events/events-list.component';
import { EventDetailsComponent } from '../event-details/event-details.component';

export const appRoutes: Routes = [
  { path: 'cazana', component: CazanaFormComponent },
  { path: 'advertised', component: AdvertisedForSaleComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '', redirectTo: '/cazana', pathMatch: 'full' },
];
