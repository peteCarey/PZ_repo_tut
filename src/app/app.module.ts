import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CazanaFormComponent } from './cazana/cazana-form.component';
import { AdvertisedForSaleComponent } from './cazana/advertised-for-sale.component';
import { appRoutes } from './cazana/routes';
import { CazanaService } from './cazana/cazana.service';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventDetailsComponent } from './event-details/event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CazanaFormComponent,
    AdvertisedForSaleComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [CazanaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
