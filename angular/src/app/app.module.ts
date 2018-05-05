import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppRoutings } from "./app.routings";

import { AppComponent } from './app.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { SiteHomeComponent } from './components/site-home/site-home.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteFooterComponent,
    SiteHeaderComponent,
    SiteLayoutComponent,
    SiteHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutings
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
