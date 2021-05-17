import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {News} from './news';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getEmployees(): Observable<News> {
    return this.http.get<News>(this.apiURL + '/news')
      .pipe(
        retry(1)
      );
  }
}
