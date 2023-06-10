import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Pokemon} from "../models/pokemon";
import {PokemonService} from "../services/pokemon.service";
import { PokemonTypeColorPipe } from '../pipes/pokemon-type-color.pipe';
import { LoaderComponent } from '../loader/loader.component';
import { NgIf, NgFor, DatePipe } from '@angular/common';

@Component({
    selector: 'app-detail-pokemon',
    templateUrl: './detail-pokemon.component.html',
    styleUrls: ['./detail-pokemon.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, LoaderComponent, DatePipe, PokemonTypeColorPipe]
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  currentPokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {
  }

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId).subscribe(pokemon => this.currentPokemon = pokemon);
    }
  }

  goBack() {
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon() {
    this.router.navigate(['edit/pokemon/' + this.currentPokemon?.id])
  }

  deletePokemon(currentPokemon: Pokemon) {
    this.pokemonService.deletePokemon(currentPokemon.id).subscribe(() => this.goBack());
  }
}
