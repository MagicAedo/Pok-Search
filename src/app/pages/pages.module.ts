import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ByNameComponent } from './by-name/by-name.component';
import { ByTypeComponent } from './by-type/by-type.component';
import { FaqComponent } from './faq/faq.component';
import { ShowPokemonComponent } from '../components/show-pokemon/show-pokemon.component';



@NgModule({
  declarations: [
    ByNameComponent,
    ByTypeComponent,
    FaqComponent,
    ShowPokemonComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    FaqComponent
  ]
})
export class PagesModule { }
