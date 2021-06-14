import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pokemon } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';
import { Result } from '../result.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, OnDestroy {

  pokemon: Pokemon;
  results: Result[];
  subscription: Subscription;

  constructor(private pokemonService: PokemonService,
    private router: Router,
    private route: ActivatedRoute) {
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    console.log('I am just ignoring you============');
    this.subscription = this.pokemonService.pokemonChanged
    .pipe(
      map(pokemon => {
        return pokemon.results
      })
    )
    .subscribe(
      (results: Result[]) => {
        this.results = results;
      }
    );
  this.results = this.pokemonService.getPokemonResults();
  }

}
