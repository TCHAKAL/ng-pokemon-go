import {Injectable} from '@angular/core';
import {delay, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string;

  login(userName: string, password: string): Observable<boolean> {
    const isLoggedIn = (userName == 'pikachu' && password == 'pikachu');
    return of(isLoggedIn).pipe(
      delay(100),
      tap(isLoggedId => this.isLoggedIn = isLoggedId)
    );
  }

  logout() {
    this.isLoggedIn = false;
  }
}
