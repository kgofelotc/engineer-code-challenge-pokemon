import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';
import { PokemonItemComponent } from './pokemon/pokemon-list/pokemon-item/pokemon-item.component';
import { PokemonStartComponent } from './pokemon/pokemon-start/pokemon-start.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonItemComponent,
    PokemonStartComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
