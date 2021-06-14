import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Pokemon } from '../pokemon/pokemon.model';
import { PokemonService } from '../pokemon/pokemon.service';
import { Subject, throwError } from 'rxjs';
import { PokemonDtl } from '../pokemon/pokemon-dtl.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  error = new Subject<string>();
  pokemonDtl = new PokemonDtl();
  


  constructor(private http: HttpClient, private pokemonService: PokemonService) { }
  fetchPokemon() {
    console.log('About to go fetch deta======');
    this.http
      .get<Pokemon>(

        'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'
      ).subscribe(pokemon => {
        console.log('Complete fetch deta======');
        this.pokemonService.setPokemon(pokemon);
        this.pokemonService.setPokemonResults(pokemon.results);

      }),
      catchError(errorRes => {
        return throwError(errorRes)

      });
  }

  fetchPokemonDetails(name: string) {
    console.log('About to go fetch deta fetchPokemonDetails');
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/'+name)

      .pipe(map(responeData => {
        console.log('About to go pipe deta fetchPokemonDetails' + this.pokemonDtl);
     

        this.pokemonDtl.height = responeData.height;
        this.pokemonDtl.id =responeData.id;
        this.pokemonDtl.is_default = responeData.is_default;
        this.pokemonDtl.location_area_encounters =responeData.location_area_encounters;
        this.pokemonDtl.name =responeData.name;
        this.pokemonDtl.order =responeData.order;
        this.pokemonDtl.sprites =responeData.sprites;
        this.pokemonDtl.stats =responeData.stats;
        this.pokemonDtl.weight =responeData.weight;
    
        return this.pokemonDtl;
      })).subscribe(pokemonDtl => {
        console.log('Complete fetch deta- subscribe fetchPokemonDetails' + pokemonDtl);
        // this.pokemonService.setPokemon(pokemon);
        // this.pokemonService.setPokemonResults(pokemon.results);
        this.pokemonService.setPokemonDetails(pokemonDtl);
        this.pokemonService.setPokemonDetailSprites(pokemonDtl.sprites);

      }),
      
      catchError(errorRes => {
        return throwError(errorRes)

      });
  }
}
