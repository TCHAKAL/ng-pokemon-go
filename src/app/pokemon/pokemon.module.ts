import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonTypeColorPipe} from "./pipes/pokemon-type-color.pipe";
import {BorderCardDirective} from "./directives/border-card.directive";
import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {RouterModule, Routes} from "@angular/router";
import {PokemonService} from "./services/pokemon.service";
import {FormsModule} from "@angular/forms";

const pokemonRoutes: Routes = [
  {path: 'pokemons', component: ListPokemonComponent},
  {path: 'pokemons/:id', component: DetailPokemonComponent},
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonTypeColorPipe,
    BorderCardDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [
    PokemonService,
  ]
})
export class PokemonModule {
}
