import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Escolaridade } from '../models/escolaridade';

@Injectable({
  providedIn: 'root'
})
export class EscolaridadeService {
  url = 'https://localhost:44342/Escolaridades';

  constructor(private httpClient: HttpClient) { }

  todas(): Observable<Escolaridade[]> {
    return this.httpClient.get<Escolaridade[]>(this.url);
  }
}
