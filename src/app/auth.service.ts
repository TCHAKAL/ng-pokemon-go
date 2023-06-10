import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  login(userName: string, password: string): Observable<boolean> {
    this.isLoggedIn = (userName == 'pikachu' && password == 'pikachu');
    return of(this.isLoggedIn).pipe();
  }

  logout() {
    this.isLoggedIn = false;
  }
}
