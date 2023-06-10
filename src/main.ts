import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { InMemoryDataService } from './app/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { PokemonService } from './app/pokemon/services/pokemon.service';
import { AuthGuard } from './app/auth.guard';
import { provideRouter, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'pokemons',
        pathMatch: 'full',
    },
    {
        path: '',
        loadChildren: () => import("./app/pokemon/pokemon.root"),
        canActivate: [AuthGuard],
        providers: [PokemonService],
    },
    {
        path: 'login',
        loadComponent: () => import("./app/login/login.component").then(module => module.LoginComponent),
    },
    {
        path: '**',
        loadComponent: () => import("./app/page-not-found/page-not-found.component").then(module => module.PageNotFoundComponent),
    }
];



bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(withInterceptorsFromDi()),
      importProvidersFrom(BrowserModule, FormsModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })),
      provideRouter(routes)
    ]
})
  .catch(err => console.error(err));
