import {Component, OnInit} from '@angular/core';
import {Pokemon} from "./models/pokemon";
import {POKEMONS} from "./models/mock-pokemon-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

   ngOnInit(): void {
    console.table(this.pokemonList)
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);

    if (pokemon) {
      this.pokemonSelected = pokemon;
      console.log(`vous avez demandé le pokemon ${pokemon.name}`);
    } else {
      this.pokemonSelected = pokemon;
      console.log(`vous avez demandé un pokemon qui n'existe pas !`);
    }
  }
}
