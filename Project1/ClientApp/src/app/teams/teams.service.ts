import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Team } from "./team";

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private apiURL = "https://localhost:5001/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(this.apiURL + '/teams')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getTeam(id): Observable<Team> {
    return this.httpClient.get<Team>(this.apiURL + '/teams/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createTeam(team): Observable<Team> {
    return this.httpClient.post<Team>(this.apiURL + '/teams/', JSON.stringify(team), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updateTeam(id, team): Observable<Team> {
    return this.httpClient.put<Team>(this.apiURL + '/teams/' + id, JSON.stringify(team), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deleteTeam(id) {
    return this.httpClient.delete<Team>(this.apiURL + '/teams/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
