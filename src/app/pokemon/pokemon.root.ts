import {Routes} from "@angular/router";
import {AddPokemonComponent} from "./add-pokemon/add-pokemon.component";
import {PokemonService} from "./services/pokemon.service";

export default [{
  path: '',
  providers: [PokemonService],
  children: [
    {
      path: 'edit/pokemon/:id',
      loadComponent: () => import('./edit-pokemon/edit-pokemon.component').then(editPokemon => editPokemon.EditPokemonComponent)
    },
    {
      path: 'add/pokemon',
      component: AddPokemonComponent,
    },
    {
      path: 'pokemons',
      loadComponent: () => import('./list-pokemon/list-pokemon.component').then(listPokemon => listPokemon.ListPokemonComponent),
    },
    {
      path: 'pokemons/:id',
      loadComponent: () => import('./detail-pokemon/detail-pokemon.component').then(detailPokemon => detailPokemon.DetailPokemonComponent),
    },
  ]
}

] as Routes;
