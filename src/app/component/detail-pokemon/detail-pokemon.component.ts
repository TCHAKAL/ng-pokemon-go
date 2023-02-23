import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Pokemon} from "../../models/pokemon";
import {POKEMONS} from "../../models/mock-pokemon-list";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  currentPokemon: Pokemon | undefined;

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.pokemonList = POKEMONS;
    const pokemonId: string | null = this.router.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.currentPokemon = this.pokemonList.find(pokemon => +pokemonId == pokemon.id);
    }
  }

}
