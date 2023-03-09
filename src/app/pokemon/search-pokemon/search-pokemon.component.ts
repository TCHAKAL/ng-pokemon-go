import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../models/pokemon";
import {Router} from "@angular/router";
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {PokemonService} from "../services/pokemon.service";

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {

  searchTerms = new Subject<string>();
  pokemon$: Observable<Pokemon[]>;

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) {
  }

  ngOnInit(): void {
    this.pokemon$ = this.searchTerms.pipe(
      debounceTime(200),//un temps d'attente
      distinctUntilChanged(),//ne ne pas chercher avec des résultats existent
      switchMap((term) => this.pokemonService.searchPokemonList(term)) // fait appel au service
    );
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon) {
    const link = [`/pokemons`, pokemon.id];
    this.router.navigate(link);
  }
}
