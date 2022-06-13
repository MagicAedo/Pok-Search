import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonInterface } from '../../Interfaces/pokemon.interface';

@Component({
  selector: 'app-show-pokemon',
  templateUrl: './show-pokemon.component.html',
})
export class ShowPokemonComponent implements OnInit {

  @Input() pokemonSearched!:PokemonInterface;


  @Input() pokemon_state!:boolean; 

  constructor() { }

  ngOnInit(): void {    

  }

  
}
