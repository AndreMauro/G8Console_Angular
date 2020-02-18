import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BemComponent } from './bem/bem.component';
import { KovisComponent } from './kovis/kovis.component';
import { DocumentsTableComponent } from '../app/kovis/documents-table/documents-table.component';
import { MotorDeQuestionariosComponent } from './motor-de-questionarios/motor-de-questionarios.component';
import { MiesComponent } from './mies/mies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiestableComponent } from './mies/miestable/miestable.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BemLogTableComponent } from './bem/bem-log-table/bem-log-table.component';
import { InitResumeComponent } from './init-resume/init-resume.component';
import {MatTabsModule} from "@angular/material/tabs";
import { SITComponent } from './sit/sit.component';
import { UATComponent } from './uat/uat.component';
import { PRDComponent } from './prd/prd.component';
import { BemMetricsTableComponent } from './init-resume/bem-metrics-table/bem-metrics-table.component';


@NgModule({
  declarations: [
    AppComponent,
    BemComponent,
    KovisComponent,
    DocumentsTableComponent,
    MotorDeQuestionariosComponent,
    MiesComponent,
    MiestableComponent,
    BemLogTableComponent,
    InitResumeComponent,
    SITComponent,
    UATComponent,
    PRDComponent,
    BemMetricsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
