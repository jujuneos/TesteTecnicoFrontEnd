import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SalvarUsuarioComponent } from './gerenciamento-usuarios/salvar.usuario/salvar.usuario.component';
import { PaginaInicialComponent } from './gerenciamento-usuarios/pagina.inicial/pagina.inicial.component';
import { EditarUsuarioComponent } from './gerenciamento-usuarios/salvar.usuario/editar.usuario/editar.usuario.component';

const routes: Routes = [
    { path: '', component: PaginaInicialComponent, data: { title: 'Gerenciamento de usuários' } },
    { path: 'salvar-usuario', component: SalvarUsuarioComponent, data: { title: 'Salvar usuário' } },
    { path: 'editar-usuario/:idUsuario/:nome/:sobrenome/:email/:dataNascimento/:idEscolaridade', component: EditarUsuarioComponent, data: { title: 'Editar usuário' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
