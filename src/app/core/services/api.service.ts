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
  public locationUrl: string = "https://rickandmortyapi.com/api/location"
  private apiFilter = 'https://rickandmortyapi.com/api/character/';

  getAllCharacters(page: number): Observable<any> {
    return this.http.get(`${this.url}character/?page=${page}`)
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.url}character/${id}`)
  }

  getLocation(): Observable<any> {
    return this.http.get(this.locationUrl)
  }

  filterCharacters(name: string, status: string, species: string) {
    const queryParams = [];
    if (name) {
      queryParams.push(`name=${name}`);
    }
    if (status) {
      queryParams.push(`status=${status}`);
    }
    if (species) {
      queryParams.push(`species=${species}`);
    }
    const url = this.apiFilter + '?' + queryParams.join('&');

    return this.http.get(url);
  }
}
