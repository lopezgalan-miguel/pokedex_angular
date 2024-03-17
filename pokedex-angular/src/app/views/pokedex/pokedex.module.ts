import { NgModule } from '@angular/core';
import { PokedexComponent } from './pokedex.component';
import { PokescreenComponent } from './components/pokescreen/pokescreen.component';
import { PokeSearchComponent } from './components/poke-search/poke-search.component';
import { PokedexRoutingModule } from './pokedex-routing.module';

@NgModule({
    declarations: [
      PokedexComponent,
      PokescreenComponent,
      PokeSearchComponent
    ],
    imports: [
      PokedexRoutingModule
    ],
    providers: []
  })
  export class PokedexModule {}