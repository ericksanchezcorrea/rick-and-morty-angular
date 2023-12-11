import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  API = "https://rickandmortyapi.com/api/character"

  constructor(private http: HttpClient) { }

  getCharacters(index:number): Observable<any> {
    return this.http.get(`${this.API}/?page=${index}`)
  }

  getCharacter(id:number): Observable<any> {
    return this.http.get(`${this.API}/${id}`)
  }
}
