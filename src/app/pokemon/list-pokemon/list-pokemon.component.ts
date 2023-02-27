import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../models/pokemon";
import {Router} from "@angular/router";
import {PokemonService} from "../services/pokemon.service";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

  pokemonList: Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.pokemonService.getListPokemons().subscribe(pokemonList => this.pokemonList = pokemonList);
  }

  goToPokemon(pokemonId: number) {
    this.router.navigate([`/pokemons/${pokemonId}`]);
  }

  addPokemon() {
    this.router.navigate([`add/pokemon`]);
  }
}
