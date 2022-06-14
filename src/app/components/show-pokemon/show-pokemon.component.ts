import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonInterface } from '../../Interfaces/pokemon.interface';
import { PokemonServicesService } from '../../services/pokemon-services.service';

@Component({
  selector: 'app-show-pokemon',
  templateUrl: './show-pokemon.component.html',
})
export class ShowPokemonComponent implements OnInit {

  pokemonSearched!:PokemonInterface; 
  pokemon_state!:boolean; 

  private pokemonObserver = {
    next: (resp: PokemonInterface) => {
      this.pokemonSearched = resp;

    },
    error: () => {
      this.pokemon_state = true;
    }


  }

  constructor(
    private pokemonService: PokemonServicesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (resp) => { 
        this.searchPokemon(resp['id'])
      }
    )
   

  }

  searchPokemon(input:string){ 
    if (input == '') {
      this.pokemon_state = true;
    } else {
      this.pokemonService.searchByName(input.toLowerCase()).subscribe(this.pokemonObserver);
      this.pokemon_state = false;
    }

  }

  



}
