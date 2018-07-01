import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { UppercaserComponent } from './uppercaser/uppercaser.component';
import { LowercaserComponent } from './lowercaser/lowercaser.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitcherComponent,
    UppercaserComponent,
    LowercaserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
