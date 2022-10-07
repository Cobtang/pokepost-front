import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { LoadingService } from 'src/app/services/loading.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import Pokemon from '../../models/Pokemon';

@Component({
	selector: 'app-pokemon-page',
	templateUrl: './pokemon-page.component.html',
	styleUrls: ['./pokemon-page.component.css'],
})
export class PokemonPageComponent implements OnInit {
	title = 'Pokepost Pokemon Page';
	loading$ = this.loader.loading$;
	pokemon: Pokemon | undefined;

	constructor(
		private pokemonService: PokemonService,
		private router: Router,
		private location: Location,
		private activatedRoute: ActivatedRoute,
		public loader: LoadingService
	) {}

	ngOnInit(): void {
		this.activatedRoute.queryParams.subscribe(params => {
			const pokemonEntry = params["pokemon"];
			if (pokemonEntry != undefined) {
				this.searchPokemon (pokemonEntry);
				(<HTMLInputElement>document.getElementById('query')).value = pokemonEntry;
			}
	  	});
	}

	searchPokemon(searchEntry: string) {
		this.location.replaceState("/pokemon-page", "pokemon=" + searchEntry);
		this.pokemonService.getPokemon(searchEntry).subscribe({
			next: (result) => {
				this.pokemon = result;
			},
			error: (err) => console.log("ERROR: ", err),
			complete: () => console.log("Pokemon: ", this.pokemon)
		}
		);
		
	}
}
