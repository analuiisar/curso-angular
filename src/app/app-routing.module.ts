import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ServicosComponent } from './servicos/servicos.component';

const routes: Routes = [
  // {path: '', component: CadastroComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'servicos', component: ServicosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
