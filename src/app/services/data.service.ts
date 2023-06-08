import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_ROUTES } from '../api';
import { CONFIG } from '../config';
import { SaleAd } from '../models/salead';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  httpOptions = {
    headers: new HttpHeaders({'Accept': 'application/json',
                              'Content-type': 'application/json'
                            })
  };

  constructor(private httpClient: HttpClient) { }

  isOwner(author: number): boolean {
    return (author.toString() == sessionStorage.getItem(CONFIG.id));
  }

  getUserInfo(): Observable<User> {
    let request_params = new HttpParams().set('username', sessionStorage.getItem(CONFIG.username)!);

    return this.httpClient.get<User>(API_ROUTES.user, {headers: this.httpOptions.headers,
                                                       params: request_params}); 
  }

  getSaleAds(): Observable<SaleAd[]> {
    return this.httpClient.get<SaleAd[]>(API_ROUTES.saleads, this.httpOptions);
  }

  getSaleAd(id: number): Observable<SaleAd> {
    const url = API_ROUTES.salead + `${id}/`;
    return this.httpClient.get<SaleAd>(url, this.httpOptions);
  }

  deleteSaleAd(id: number): Observable<any> {
    const url = API_ROUTES.salead + `${id}/`;
    return this.httpClient.delete<any>(url, this.httpOptions);
  }

  addSaleAd(body: FormData): Observable<number> {
    return this.httpClient.post<number>(API_ROUTES.saleads, body);
  }

}
