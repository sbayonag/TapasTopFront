import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private readonly usersUrl: string = 'http://localhost:8080/api/users'
  private readonly userSearchByUsernameUrl: string = '/search/findByUsernameStartingWith?prefix=';

  constructor(private http: HttpClient) { }

  users$ = this.http.get<any>(this.usersUrl)
    .pipe(
      tap(console.log));

  usersByUsername$ = (prefix: string | any) => this.http.get<any>(`${this.usersUrl}${this.userSearchByUsernameUrl}${prefix}`)
    .pipe(
      tap(console.log));
}