import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { API_ROUTES } from '../api';
import { CONFIG } from '../config';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  is_authenticated = new BehaviorSubject<boolean>(false);
  userInfo = new BehaviorSubject<User>({id: undefined, username: undefined, email: ''});

  constructor(private httpClient: HttpClient) { }

  login(username?: string, password?: string): Observable<boolean> {
    return new Observable((observer) => {
      this.doLogin(username, password).subscribe({
        next: (resp) => {
          if (resp.token) {
            sessionStorage.setItem(CONFIG.token_keyword, resp.token);
            sessionStorage.setItem(CONFIG.username, username!);
            this.is_authenticated.next(true);
            observer.next(true);
          }
          else {
            observer.next(false);
          }
        },
        error: (err) => {
          console.log(err);
          observer.next(false);
        }
      });
    })
  }

  doLogin(username?: string, password?: string): Observable<any> {
    let request_headers = new HttpHeaders();
    request_headers = request_headers.set('Content-Type', 'application/json; charset=utf-8')
                                     .set('Accept', 'application/json');
    
    const request_body = {'username': username, 'password': password};
    
    return this.httpClient.post(API_ROUTES.login, request_body, {headers: request_headers});
  }

  getAuthorizationToken(): any {
    return sessionStorage.getItem(CONFIG.token_keyword);
  }

  getUserInfo(): Observable<User> {
    let request_headers = new HttpHeaders();
    request_headers = request_headers.set('Content-Type', 'application/json; charset=utf-8')
                                     .set('Accept', 'application/json');
    let request_params = new HttpParams().set('username', sessionStorage.getItem(CONFIG.username)!);

    return this.httpClient.get<User>(API_ROUTES.user, {headers: request_headers,
                                                       params: request_params}); 
  }

  isLoggedIn(): boolean {
    /* console.log(`isLoggedIn() in AuthService: ${sessionStorage.getItem(CONFIG.token_keyword)}`); */
    return (sessionStorage.getItem(CONFIG.token_keyword) == null) ? false : true;
  }

  logout(): void {
    sessionStorage.removeItem(CONFIG.id);
    sessionStorage.removeItem(CONFIG.username);
    sessionStorage.removeItem(CONFIG.token_keyword);
    this.is_authenticated.next(false);
  }
}
