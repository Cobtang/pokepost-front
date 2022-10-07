import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Pokemon from '../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonUrl: string = `${environment.baseUrl}/pokemon`;

  constructor (private http: HttpClient) { }

  getPokemon (pokemonId : string | number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.pokemonUrl}/`+ pokemonId, {headers: environment.headers, withCredentials: environment.withCredentials});
  }
}
