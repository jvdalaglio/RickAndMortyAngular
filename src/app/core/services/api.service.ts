import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public url: string = 'https://rickandmortyapi.com/api/'

  getAllCharacters(page: number): Observable<any> {
    return this.http.get(`${this.url}character/?page=${page}`)
  }
}
