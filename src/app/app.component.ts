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
  }

  selectPokemon(inputNumber: HTMLInputElement): void {
    const n: number = Number(inputNumber.value);
    console.log(`vous avez cliquer sur le pokemon ${this.pokemonsList[n].name}`);
  }
}
