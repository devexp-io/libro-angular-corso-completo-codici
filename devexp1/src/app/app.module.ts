import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MioComponenteComponent } from './mio-componente/mio-componente.component';
import { ComponenteConInputComponent } from './componente-con-input/componente-con-input.component';
import { ComponenteConOutputComponent } from './componente-con-output/componente-con-output.component';
import { SecondoComponenteComponent } from './secondo-componente/secondo-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    MioComponenteComponent,
    ComponenteConInputComponent,
    ComponenteConOutputComponent,
    SecondoComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
