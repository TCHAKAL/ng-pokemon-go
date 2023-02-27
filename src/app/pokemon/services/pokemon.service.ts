import {Injectable} from '@angular/core';
import {Pokemon} from "../models/pokemon";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";

@Injectable()
export class PokemonService {

  constructor(private httpClient: HttpClient) {
  }

  getListPokemons(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => {
        return this.handleError(error, []);
      })
    )
  }


  getPokemonById(id: number): Observable<Pokemon | undefined> {
    return this.httpClient.get<Pokemon>(`api/pokemons/${id}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => {
        return this.handleError(error, undefined);
      })
    )
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };
    return this.httpClient.put('api/pokemons', pokemon, httpOptions).pipe(
      tap(response => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  deletePokemon(pokemonId: number): Observable<null> {
    return this.httpClient.delete(`api/pokemons/${pokemonId}`).pipe(
      tap(response => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };
    return this.httpClient.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap(response => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  getPokemonTypeList(): string[] {
    return ['Plante', 'Feu', 'Eau', 'Insect', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy'];
  }

  log(response: any) {
    console.table(response);
  }

  handleError(error: Error, errorValue: any) {
    console.log(error);
    return of(errorValue);
  }
}
