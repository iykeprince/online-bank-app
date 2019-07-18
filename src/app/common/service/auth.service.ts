import { JwtHelperService } from '@auth0/angular-jwt';
import { Token } from './../models/token.model';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const TOKEN = "token";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.php_url;

  constructor(private http: HttpClient) {
  }

  login(credentials): Observable<Token> {
    return this.http.post<Token>(`${this.url}/signin/authenticate`, credentials);
  }

  saveToken(token) {
    localStorage.setItem(TOKEN, token);
  }

  getToken() {
    return localStorage.getItem(TOKEN);
  }

  isLoggedIn() {
    if (!this.getToken()) return false;

    const isTokenExpired = new JwtHelperService().isTokenExpired(this.getToken());
    return isTokenExpired ? false : true;
  }

  get currentUser() {
    let token = localStorage.getItem(TOKEN);
    if (!token) return null;

    return new JwtHelperService().decodeToken(token);
  }
  logout() {
    localStorage.removeItem(TOKEN);
  }
}
