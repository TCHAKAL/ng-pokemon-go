import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../models/pokemon";
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';

@Component({
    selector: 'app-add-pokemon',
    templateUrl: './add-pokemon.component.html',
    styleUrls: ['./add-pokemon.component.scss'],
    standalone: true,
    imports: [PokemonFormComponent]
})
export class AddPokemonComponent implements OnInit{

  pokemon : Pokemon;
  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }

}
