import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'https://localhost:44342/Usuarios';

  constructor(private httpClient: HttpClient, private router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  listarUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.url);
  }

  adicionarUsuario(usuario: Usuario): any {
    this.httpClient.post<Usuario>(this.url + '/AdicionarUsuario', usuario, this.httpOptions)
    .subscribe((res) => {
      this.router.navigate(['']);
      return alert("Usuário cadastrado com sucesso!");
    }, (err) => {
      let erro = err.error;
      return alert(erro);
    });
  }

  atualizarUsuario(idUsuario: number, usuario: Usuario): any {
    let parametro: String = idUsuario.toString();
    this.httpClient.put<Usuario>(this.url + '/' + parametro, usuario, this.httpOptions)
    .subscribe((res) => {
      this.router.navigate(['']);
      return alert("Usuário atualizado com sucesso!");
    }, (err) => {
      let erro = err.error;
      console.log(erro);
      return alert(erro);
    });
  }

  excluirUsuario(idUsuario: number): Observable<number> {
    let parametro: String = idUsuario.toString();
    return this.httpClient.delete<number>(this.url + '/' + parametro, this.httpOptions);
  }
}
