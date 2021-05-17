import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {

  constructor(private http: HttpClient) { }
  getSeasons(): Observable<any>{
    return this.http.get('assets/seasons.json');
  }
}
