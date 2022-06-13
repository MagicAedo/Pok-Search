import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FaqComponent } from './pages/faq/faq.component';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByTypeComponent } from './pages/by-type/by-type.component';
import { ShowPokemonComponent } from './components/show-pokemon/show-pokemon.component';


const routes:Routes = [ 
  {
      path:'',
      component: FaqComponent,
      pathMatch:'full'
  },
  {
      path:'by-name',
      component:ByNameComponent,
  },
  {
      path:'by-type',
      component:ByTypeComponent
  },
  {
      path:'pokemon/:id',
      component:ShowPokemonComponent
  },
  {
      path:'**',
      redirectTo:''
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
