import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatsOverviewComponent } from './cats/cats-overview/cats-overview.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    CatsOverviewComponent,
    CatsDetailViewComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }