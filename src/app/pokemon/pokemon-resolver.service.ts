import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { Pokemon } from './pokemon.model';
import { PokemonService } from './pokemon.service';
import { Result } from './result.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonResolverService implements Resolve<Result[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private pokemonService: PokemonService
  ) {
    console.log('Initiating...');
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Result[] | Observable<Result[]> | Promise<Result[]> {
    console.log('Initiating...');
    const results = this.pokemonService.getPokemonResults()

    if (results.length === 0) {
      this.dataStorageService.fetchPokemon();
    } else {
      return results;
    }


  }



}