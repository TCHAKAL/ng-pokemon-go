import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../models/pokemon";
import {Router} from "@angular/router";
import {PokemonService} from "../services/pokemon.service";
import { PokemonTypeColorPipe } from '../pipes/pokemon-type-color.pipe';
import { BorderCardDirective } from '../directives/border-card.directive';
import { NgFor, DatePipe } from '@angular/common';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';

@Component({
    selector: 'app-list-pokemon',
    templateUrl: './list-pokemon.component.html',
    styleUrls: ['./list-pokemon.component.scss'],
    standalone: true,
    imports: [SearchPokemonComponent, NgFor, BorderCardDirective, DatePipe, PokemonTypeColorPipe]
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
