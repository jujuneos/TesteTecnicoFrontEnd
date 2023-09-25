import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { PaginaInicialComponent } from '../pagina.inicial/pagina.inicial.component';
import { UsuarioService } from 'src/app/services/usuario.service';

import { Observable } from 'rxjs';
import { Escolaridade } from 'src/app/models/escolaridade';
import { EscolaridadeService } from 'src/app/services/escolaridade.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-salvar.usuario',
  templateUrl: './salvar.usuario.component.html',
  styleUrls: ['./salvar.usuario.component.css']
})
export class SalvarUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  usuario = {} as Usuario;
  paginaInicial = {} as PaginaInicialComponent;
  escolaridades: Observable<Escolaridade[]> | undefined;

  constructor(
    private usuarioService: UsuarioService,
    private escolaridadeService: EscolaridadeService, 
    private formBuilder: FormBuilder
    ) {
    this.usuarioForm = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      idEscolaridade: [0, Validators.required],
    });
  }

  adicionarUsuario(usuario: Usuario) {
    this.usuarioService.adicionarUsuario(usuario);
  }

  listarEscolaridades() {
    this.escolaridades = this.escolaridadeService.todas();
  }

  ngOnInit(): void {
      this.listarEscolaridades();
  }
  
  onSubmit(): void {
    const usuario = this.usuarioForm.value;
    this.adicionarUsuario(usuario);
  }
}
