import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../models/pokemon";
import {PokemonService} from "../services/pokemon.service";
import {Router} from "@angular/router";
import { PokemonTypeColorPipe } from '../pipes/pokemon-type-color.pipe';
import { LoaderComponent } from '../loader/loader.component';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-pokemon-form',
    templateUrl: './pokemon-form.component.html',
    styleUrls: ['./pokemon-form.component.scss'],
    standalone: true,
    imports: [NgIf, FormsModule, NgFor, LoaderComponent, PokemonTypeColorPipe]
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[];
  isAddForm: boolean;

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.isAddForm = this.router.url.includes('add');
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const isChecked = ($event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.pokemon.types.push(type)
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.slice(index, 1);
    }
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }
    if (this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }
    return true;
  }

  onSubmit() {
    if (this.isAddForm) {
      this.pokemonService.addPokemon(this.pokemon).subscribe((pokemon) => {
          this.router.navigate(['/pokemons/', pokemon.id])
        }
      );
    } else {
      this.pokemonService.updatePokemon(this.pokemon).subscribe(() => {
          this.router.navigate(['/pokemons/', this.pokemon.id])
        }
      );
    }
  }
}
