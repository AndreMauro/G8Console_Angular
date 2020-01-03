import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BemComponent } from './bem/bem.component';
import { KovisComponent as Kovis} from './kovis/kovis.component';
import { MotorDeQuestionariosComponent as MotorDeQuestionarios  } from './motor-de-questionarios/motor-de-questionarios.component';

const routes: Routes = [
	{ path: 'Bem', component: BemComponent},
	{ path: 'Kovis', component: Kovis},
	{ path: 'MotorDeQuestionarios', component: MotorDeQuestionarios}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
