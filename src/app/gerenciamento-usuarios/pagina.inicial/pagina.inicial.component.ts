import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Observable } from 'rxjs';
import { SalvarUsuarioComponent } from '../salvar.usuario/salvar.usuario.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina.inicial',
  templateUrl: './pagina.inicial.component.html',
  styleUrls: ['./pagina.inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {
  usuario = {} as Usuario;
  usuarios: Observable<Usuario[]> | undefined;
  salvar = {} as SalvarUsuarioComponent;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router) {}

  ngOnInit(): void {
      this.listarUsuarios();
  }

  listarUsuarios() {
    this.usuarios = this.usuarioService.listarUsuarios();
  }

  editarUsuario(usuario: Usuario) {
    this.router.navigate([
      '/editar-usuario', 
      usuario.idUsuario, 
      usuario.nome, 
      usuario.sobrenome, 
      usuario.email, 
      usuario.dataNascimento, 
      usuario.idEscolaridade
    ]);
  }

  excluirUsuario(usuario: Usuario) {
    if (confirm("Deseja excluir o usuário " + usuario.nome + "?")) {
      this.usuarioService.excluirUsuario(usuario.idUsuario).subscribe(() => {
        this.listarUsuarios();
        alert("Usuário excluído com sucesso.");
      })
    }
  }
}
