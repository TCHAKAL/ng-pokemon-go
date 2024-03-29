import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonTypeColorPipe} from "./pipes/pokemon-type-color.pipe";
import {BorderCardDirective} from "./directives/border-card.directive";
import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {RouterModule, Routes} from "@angular/router";
import {PokemonService} from "./services/pokemon.service";
import {FormsModule} from "@angular/forms";
import {PokemonFormComponent} from "./pokemon-form/pokemon-form.component";
import {EditPokemonComponent} from './edit-pokemon/edit-pokemon.component';
import {AddPokemonComponent} from './add-pokemon/add-pokemon.component';
import {SearchPokemonComponent} from './search-pokemon/search-pokemon.component';
import {LoaderComponent} from './loader/loader.component';
import {AuthGuard} from "../auth.guard";

const pokemonRoutes: Routes = [
  {path: 'edit/pokemon/:id', component: EditPokemonComponent, canActivate: [AuthGuard]},
  {path: 'add/pokemon', component: AddPokemonComponent, canActivate: [AuthGuard]},
  {path: 'pokemons', component: ListPokemonComponent, canActivate: [AuthGuard]},
  {path: 'pokemons/:id', component: DetailPokemonComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonTypeColorPipe,
    BorderCardDirective,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent
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
