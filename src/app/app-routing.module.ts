import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { ServicosComponent } from './servicos/servicos.component';

const routes: Routes = [
  // {path: '', component: CadastroComponent},
  {path: '', component: AgendamentoComponent},
  {path: 'agendamento', component: AgendamentoComponent},
  {path: 'servicos', component: ServicosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
