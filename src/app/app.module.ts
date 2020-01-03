import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BemComponent } from './bem/bem.component';
import { KovisComponent } from './kovis/kovis.component';
import { MotorDeQuestionariosComponent } from './motor-de-questionarios/motor-de-questionarios.component';


@NgModule({
  declarations: [
    AppComponent,
    BemComponent,
    KovisComponent,
    MotorDeQuestionariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	// import HttpClientModule after BrowserModule.
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
