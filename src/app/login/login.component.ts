import {Component} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, NgIf]
})
export class LoginComponent {
  message: string;
  name: string;
  password: string;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {
  }

  login() {
    console.log(this.name + ' ' + this.password);
    this.authService.login(this.name, this.password);
    this.router.navigate(['/pokemons']);
  }

  logout() {
    this.authService.logout();
  }
}
