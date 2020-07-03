import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EbComponent } from './eb/eb.component';
import { TrvComponent } from './trv/trv.component';

@NgModule({
  declarations: [
    AppComponent,
    EbComponent,
    TrvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
