import {Routes} from "@angular/router";
import {AddPokemonComponent} from "./add-pokemon/add-pokemon.component";
import {PokemonService} from "./services/pokemon.service";

export default [{
  path: '',
  providers: [PokemonService],
  children: [
    {
      path: 'edit/pokemon/:id',
      title: 'Modifier un Pokemon',
      loadComponent: () => import('./edit-pokemon/edit-pokemon.component').then(editPokemon => editPokemon.EditPokemonComponent)
    },
    {
      path: 'add/pokemon',
      title: 'Ajouter un Pokemon',
      component: AddPokemonComponent,
    },
    {
      path: 'pokemons',
      title: 'Liste des Pokemons',
      loadComponent: () => import('./list-pokemon/list-pokemon.component').then(listPokemon => listPokemon.ListPokemonComponent),
    },
    {
      path: 'pokemons/:id',
      title: 'Consulter un Pokemon',
      loadComponent: () => import('./detail-pokemon/detail-pokemon.component').then(detailPokemon => detailPokemon.DetailPokemonComponent),
    },
  ]
}

] as Routes;
