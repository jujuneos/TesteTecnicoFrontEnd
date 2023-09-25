import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SalvarUsuarioComponent } from './gerenciamento-usuarios/salvar.usuario/salvar.usuario.component';
import { PaginaInicialComponent } from './gerenciamento-usuarios/pagina.inicial/pagina.inicial.component';
import { EditarUsuarioComponent } from './gerenciamento-usuarios/salvar.usuario/editar.usuario/editar.usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SalvarUsuarioComponent,
    PaginaInicialComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
