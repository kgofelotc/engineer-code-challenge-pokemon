import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';
import { PokemonDetailResolverService } from './pokemon/pokemon-dtl-resolver.service';
import { PokemonResolverService } from './pokemon/pokemon-resolver.service';
import { PokemonStartComponent } from './pokemon/pokemon-start/pokemon-start.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailDataResolverService } from './pokemon/pokemon-data-resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/pokemon', pathMatch: 'full' },
  { path: 'pokemon', component: PokemonComponent, children: [
    { path: '', component: PokemonStartComponent, resolve: [PokemonResolverService] },
    { path: ':name', component: PokemonDetailComponent, resolve: [PokemonDetailResolverService, 
      PokemonDetailDataResolverService] },
  ] }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
