import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BemComponent } from './bem/bem.component';
import { KovisComponent as Kovis} from './kovis/kovis.component';
import { MiesComponent } from './mies/mies.component';
import { MotorDeQuestionariosComponent as MotorDeQuestionarios  } from './motor-de-questionarios/motor-de-questionarios.component';
import {InitResumeComponent} from "./init-resume/init-resume.component";
import {SITComponent} from "./sit/sit.component";
import {UATComponent} from "./uat/uat.component";
import {PRDComponent} from "./prd/prd.component";

const routes: Routes = [
	{ path: 'bem', component: BemComponent},
	{ path: 'kovis', component: Kovis},
	{ path: 'motordequestionarios', component: MotorDeQuestionarios},
  { path: 'mies', component:MiesComponent},
  { path: '', component: InitResumeComponent},
  { path: 'sit', component: SITComponent},
  { path: 'uat', component: UATComponent},
  { path: 'sit', component: PRDComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
