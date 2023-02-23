import {Component} from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import {POKEMONS} from "../../models/mock-pokemon-list";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;
}
