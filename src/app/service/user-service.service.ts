import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private readonly usersUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  users$ = this.http.get<any>(this.usersUrl)
    .pipe(
      tap(console.log));
}