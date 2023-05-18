import {Component} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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
    this.authService.login(this.name, this.password);
  }

  logout() {
    this.authService.logout();
  }
}
