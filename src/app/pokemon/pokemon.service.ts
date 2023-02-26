import {Injectable} from '@angular/core';
import {Pokemon} from "./models/pokemon";
import {POKEMONS} from "./models/mock-pokemon-list";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() {
  }

  getListPokemons(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(id: number): Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id == id);
  }

  getPokemonTypeList(): string[] {
    return ['Plante', 'Feu', 'Eau', 'Insect', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy'];
  }
}
