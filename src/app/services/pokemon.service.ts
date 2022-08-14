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
  pokemon : Pokemon = null!;

  constructor (private http: HttpClient) { }

  getPokemon (pokemonId : string | number): Observable<any> {
    const res = this.http.post<any>(`${this.pokemonUrl}/`+ pokemonId, {headers: environment.headers, withCredentials: environment.withCredentials});
    res.subscribe((data : any) => {
        console.log(data);
        this.pokemon = data;
        console.log ("Pokemon Model: " + this.pokemon);
        sessionStorage.setItem("pokemon", JSON.stringify(data));
    })
    return res;
  }
}
