import { Component, OnInit } from '@angular/core';
import { PokemonServicesService } from '../../services/pokemon-services.service';

import { PokemonTypeInterface } from '../../Interfaces/pokemon-type.interface';
import { PokemonTypeEsp } from '../../Interfaces/pokemo-type-esp.interface';
import { pokemonUrl } from 'src/app/Interfaces/pokemonNameUrl.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-by-type',
  templateUrl: './by-type.component.html',
})
export class ByTypeComponent implements OnInit {

  pokemon_scroll!: PokemonTypeInterface;
  pokemonsSearched!: PokemonTypeEsp;
  pokemonUrl: pokemonUrl[] = []; 

  private pokemonObserverScroll = {  //Here we are getting the pokemon type request, we need these because we wanna set the scroll in the view.
    next: (resp: PokemonTypeInterface) => {
      this.pokemon_scroll = resp;
    }

  }

  private pokemonObserver = {  //Here we are getting the pokemon type request, we need these because we wanna set the scroll in the view.
    next: (resp: PokemonTypeEsp) => {
      this.pokemonUrl = [];

      this.pokemonsSearched = resp;

      if(this.pokemonsSearched.pokemon){ 
        this.pokemonsSearched.pokemon.forEach(
          (element) => { 
            this.pokemonService.getRequest(element.pokemon.url).subscribe(
              (resp) => { 
                this.pokemonUrl.push(
                  { 
                    name: resp.name,
                    urlImg:resp.sprites.front_default
                  }
                )
              }
            )
          }
        )
      }
      
  }}


  constructor(private pokemonService: PokemonServicesService,private router: Router) { }

  ngOnInit(): void {
    this.pokemonService.searchByTypeScroll().subscribe(this.pokemonObserverScroll);
  }

  getPokemonImgUrl(item: HTMLSelectElement) {
    this.pokemonService.searchByType(item.value).subscribe(this.pokemonObserver);

    }







}
