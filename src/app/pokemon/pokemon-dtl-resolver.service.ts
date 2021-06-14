import { Injectable } from '@angular/core';
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { PokemonDtl } from './pokemon-dtl.model';
import { Pokemon } from './pokemon.model';
import { PokemonService } from './pokemon.service';
import { Result } from './result.model';

@Injectable({
    providedIn: 'root'
})
export class PokemonDetailResolverService implements Resolve<PokemonDtl> {
    constructor(
        private dataStorageService: DataStorageService,
        private pokemonService: PokemonService
    ) {
        console.log('Initiating...');
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): PokemonDtl | Observable<PokemonDtl> | Promise<PokemonDtl> {
        console.log('Initiating...' + route.paramMap.get('name'));
        const results = this.pokemonService.getPokemonDetails();

        this.dataStorageService.fetchPokemonDetails(route.paramMap.get('name'));
        if (results) {
            this.dataStorageService.fetchPokemonDetails(route.paramMap.get('name'));
        } else {
            return results;
        }
    }




}