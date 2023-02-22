import {Component, OnInit} from '@angular/core';
import {Pokemon} from "./models/pokemon";
import {POKEMONS} from "./models/mock-pokemon-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokemon-go';
  pokemonsList: Pokemon[] = POKEMONS;



  constructor() {
  }

  ngOnInit(): void {
    console.table(this.pokemonsList)
    this.selectPokemon(POKEMONS[2]);

  }

  selectPokemon(pokemon: Pokemon): void {
    console.log(`vous avez cliquer sur le pokemon ${pokemon.name}`);
  }
}
