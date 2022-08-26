import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import Pokemon from '../../models/Pokemon';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {
  title = 'Pokepost Pokemon Page';
  pokemon: Pokemon = {};
  pokemonId: string = '';

  constructor(private pokemonService : PokemonService, private router: Router) {
    this.pokemonService = pokemonService;
  }

  ngOnInit(): void {

  }

}
