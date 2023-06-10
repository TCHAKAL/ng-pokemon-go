import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../services/pokemon.service";
import {Pokemon} from "../models/pokemon";
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-edit-pokemon',
    templateUrl: './edit-pokemon.component.html',
    styleUrls: ['./edit-pokemon.component.scss'],
    standalone: true,
    imports: [NgIf, PokemonFormComponent]
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
  ) {
  }

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId).subscribe(pokemon => this.pokemon = pokemon);
    } else {
      this.pokemon = undefined;
    }
  }

}
