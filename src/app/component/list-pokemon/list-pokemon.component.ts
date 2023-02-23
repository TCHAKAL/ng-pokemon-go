import {Component} from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import {POKEMONS} from "../../models/mock-pokemon-list";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent {

  constructor(private router : Router) {
  }
  pokemonList: Pokemon[] = POKEMONS;

  goToPokemon(pokemonId : number){
    this.router.navigate([`/pokemons/${pokemonId}`]);
  }
}
