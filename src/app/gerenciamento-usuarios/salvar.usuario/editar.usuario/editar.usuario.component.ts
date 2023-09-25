import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Escolaridade } from 'src/app/models/escolaridade';
import { EscolaridadeService } from 'src/app/services/escolaridade.service';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { PaginaInicialComponent } from '../../pagina.inicial/pagina.inicial.component';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar.usuario',
  templateUrl: './editar.usuario.component.html',
  styleUrls: ['./editar.usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  idUsuario: number = 0;
  usuarioForm: FormGroup;
  usuario = {} as Usuario;
  paginaInicial = {} as PaginaInicialComponent;
  escolaridades: Observable<Escolaridade[]> | undefined;

  constructor(
    private usuarioService: UsuarioService,
    private escolaridadeService: EscolaridadeService, 
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
    ) {

    this.route.params.subscribe(params => {
      this.idUsuario = params['idUsuario'];
      this.usuario.nome = params['nome'];
      this.usuario.sobrenome = params['sobrenome'];
      this.usuario.email = params['email'];
      this.usuario.dataNascimento = new Date(params['dataNascimento']);
      this.usuario.idEscolaridade = params['idEscolaridade'];
    })
    
    this.usuarioForm = this.formBuilder.group({
      idUsuario: this.idUsuario,
      nome: '',
      sobrenome: '',
      email: '',
      dataNascimento: '',
      idEscolaridade: 0,
    });
  }

  listarEscolaridades() {
    this.escolaridades = this.escolaridadeService.todas();
  }

  ngOnInit(): void {
      this.listarEscolaridades();
  }

  onSubmit(): void {
    const usuario = this.usuarioForm.value;
    const idUsuario = this.idUsuario;
    this.atualizarUsuario(idUsuario, usuario);
  }

  atualizarUsuario(idUsuario: number, usuario: Usuario) {
    this.usuarioService.atualizarUsuario(idUsuario, usuario);
  }
}
