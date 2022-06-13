import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, tap, switchMap } from 'rxjs';
import { PokemonInterface } from '../Interfaces/pokemon.interface';
import { PokemonTypeInterface } from '../Interfaces/pokemon-type.interface';
import { PokemonTypeEsp } from '../Interfaces/pokemo-type-esp.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonServicesService {

  private apiUrl: string = 'https://pokeapi.co/api/v2'; //We set the PokéApi url, it will be use later when we do our requests




  constructor(private http: HttpClient) { }

  searchByName(search: string): Observable<PokemonInterface> {
    const urlRequest: string =
      `${this.apiUrl}/pokemon/${search}`
    return this.http.get<PokemonInterface>(urlRequest);
  }

  searchByTypeScroll(): Observable<PokemonTypeInterface> {
    const urlRequest: string =
      `${this.apiUrl}/type/`
    return this.http.get<PokemonTypeInterface>(urlRequest);
  }


  searchByType(selectItem: string): Observable<PokemonTypeEsp> {
    const urlRequest: string =
      `${this.apiUrl}/type/${selectItem}`
    return this.http.get<PokemonTypeEsp>(urlRequest);
  }

  getRequest(url:string):Observable<PokemonInterface>{ 
    return this.http.get<PokemonInterface>(url);
  }



}
