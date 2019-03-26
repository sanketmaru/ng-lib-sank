import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgLibSankCarouselModule, NgLibSankCardModule } from 'ng-lib-sank';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgLibSankCarouselModule,
    NgLibSankCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
