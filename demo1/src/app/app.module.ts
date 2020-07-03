import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EbComponent } from './eb/eb.component';
import { TrvComponent } from './trv/trv.component';
import { TwdbComponent } from './twdb/twdb.component';
import { FormsModule }  from '@angular/forms';
import { StdComponent } from './std/std.component'

@NgModule({
  declarations: [
    AppComponent,
    EbComponent,
    TrvComponent,
    TwdbComponent,
    StdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
