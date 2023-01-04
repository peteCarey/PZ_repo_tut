import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CazanaFormComponent } from './cazana/cazana-form.component';
import { AdvertisedForSaleComponent } from './cazana/advertised-for-sale.component';

@NgModule({
  declarations: [AppComponent, CazanaFormComponent, AdvertisedForSaleComponent],
  imports: [BrowserModule, CommonModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
