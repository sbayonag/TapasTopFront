import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DishService {

  private readonly dishesUrl: string = 'http://localhost:8080/api/dishes'
  private readonly dishSearchByNameUrl: string = '/search/findByNameStartingWith?prefix=';

  constructor(private http: HttpClient) { }

  dishes$ = (params?: any) => this.http.get<any>(this.dishesUrl, { params })
    .pipe(
      tap(console.log));

  dishesByName$ = (prefix: string, params?: any) =>
    this.http.get<any>(`${this.dishesUrl}${this.dishSearchByNameUrl}${prefix}`, params)
      .pipe(
        tap(console.log));
}