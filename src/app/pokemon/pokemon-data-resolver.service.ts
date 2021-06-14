import { Injectable } from '@angular/core';
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { PokemonDtl, Sprites } from './pokemon-dtl.model';
import { Pokemon } from './pokemon.model';
import { PokemonService } from './pokemon.service';
import { Result } from './result.model';

@Injectable({
    providedIn: 'root'
})
export class PokemonDetailDataResolverService implements Resolve<Sprites> {
    constructor(
        private dataStorageService: DataStorageService,
        private pokemonService: PokemonService
    ) {
        console.log('Initiating...');
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Sprites | Observable<Sprites> | Promise<Sprites> {
        console.log('Initiating... PokemonDetailDataResolverService' + route.paramMap.get('name'));
        const results = this.pokemonService.getPokemonSprites();

        this.dataStorageService.fetchPokemonDetails(route.paramMap.get('name'));
        if (results) {
            this.dataStorageService.fetchPokemonDetails(route.paramMap.get('name'));
        } else {
            return results;
        }
    }
  




}