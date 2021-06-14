import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PokemonDtl, Sprites } from '../pokemon-dtl.model';
import { PokemonService } from '../pokemon.service';
import { Result } from '../result.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
  result: Result;
  id: number;
  name: string;
  pokemonDtl: PokemonDtl;
  sprites: Sprites;
  subscription: Subscription;

  constructor(private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  ngOnInit(): void {
    console.log('Initiate Details===');


    this.subscription = this.pokemonService.pokemonDetailSpritesChanged
      .subscribe(
        (sprites: Sprites) => {

          this.sprites = sprites;
          console.log('Inside subscription Details for sprites === ' + this.sprites);
        }
      );
    this.sprites = this.pokemonService.getPokemonSprites();

    this.subscription = this.pokemonService.pokemonDetailsChanged
      .subscribe(
        (pokemonDtl: PokemonDtl) => {

          this.pokemonDtl = pokemonDtl;
          console.log('Inside subscription Details for pokemonDtl=== ' + this.pokemonDtl);
        }
      );
    this.pokemonDtl = this.pokemonService.getPokemonDetails();

  }

}

