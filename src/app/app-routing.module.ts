import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListPokemonComponent} from "./component/list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "./component/detail-pokemon/detail-pokemon.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: 'pokemons', component: ListPokemonComponent},
  {path: 'pokemons/:id', component: DetailPokemonComponent},
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
  {path : '**' , component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
