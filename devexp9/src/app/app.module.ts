import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { MomentPipe } from './pipes/moment.pipe';
import { LogInputDirective } from './directives/log-input.directive';
import { BkgDirective } from './directives/bkg.directive';

@NgModule({
  declarations: [
    AppComponent,
    UppercasePipe,
    FilterPipe,
    MomentPipe,
    LogInputDirective,
    BkgDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
