import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PokemonDtl, Sprites } from './pokemon-dtl.model';
import { Pokemon } from './pokemon.model';
import { Result } from './result.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonChanged = new Subject<Pokemon>();
  pokemonResultsChanged = new Subject<Result[]>();
  pokemonDetailsChanged = new Subject<PokemonDtl>();
  pokemonDetailSpritesChanged = new Subject<Sprites>();
  isFetching = false;

  private pokemon: Pokemon ;
  private results: Result[] = [];
  private pokemonDtl : PokemonDtl;
  private sprites : Sprites;

  constructor() { }

  setPokemon(pokemon: Pokemon) {
    this.pokemon = pokemon;
    this.pokemonChanged.next(this.pokemon);
  }

  getPokemons() {
    return this.pokemon;
  }

  setPokemonResults(results: Result[]) {
    this.results = results;
    this.pokemonResultsChanged.next(this.results);
  }
  getPokemonResults() {
    return this.results;
  }


  setPokemonDetails(pokemonDtl : PokemonDtl) {
    this.pokemonDtl = pokemonDtl;
    this.pokemonDetailsChanged.next(this.pokemonDtl);
  }
  setPokemonDetailSprites(sprites : Sprites){
    this.sprites = sprites;
    this.pokemonDetailSpritesChanged.next(this.sprites);

  }
  getPokemonDetails() {
    return this.pokemonDtl;
  }
  getPokemonSprites() {
    return this.sprites;
  }

}
