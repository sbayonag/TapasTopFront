import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private readonly usersUrl: string = 'http://localhost:8080/api/users'
  private readonly userSearchByUsernameUrl: string = '/search/findByUsernameStartingWith?prefix=';

  constructor(private http: HttpClient) { }

  users$ = (params?: any) => this.http.get<any>(this.usersUrl, { params })
    .pipe(
      tap(console.log));

  usersByUsername$ = (prefix: string, params?: any) =>
    this.http.get<any>(`${this.usersUrl}${this.userSearchByUsernameUrl}${prefix}`, params)
      .pipe(
        tap(console.log));
}