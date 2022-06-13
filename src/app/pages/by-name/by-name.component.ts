import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';


import { PokemonServicesService } from '../../services/pokemon-services.service';
import { PokemonInterface } from 'src/app/Interfaces/pokemon.interface';


@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
})
export class ByNameComponent implements OnInit {

  @Input() pokemonSearched!: PokemonInterface;

  @Input() pokemon_state!: boolean;

  private pokemonObserver = {
    next: (resp: PokemonInterface) => {
      this.pokemonSearched = resp;
    },
    error: () => {
      this.pokemon_state = true;
    }


  }


  constructor(private pokemonService: PokemonServicesService) { }

  ngOnInit(): void {
  }

  search(input: HTMLInputElement) {
    if (input.value == '') {
      this.pokemon_state = true;
    } else {
      this.pokemonService.searchByName(input.value.toLowerCase()).subscribe(this.pokemonObserver);
      this.pokemon_state = false;
    }

  }


}
