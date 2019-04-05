import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BKRComponent } from './bkr/bkr.component';
import { CocaColaComponent } from './coca-cola/coca-cola.component';
import { DominosComponent } from './dominos/dominos.component';


const routes: Routes = [
  {path: 'bkr', component: BKRComponent},
  {path: 'coca-cola', component: CocaColaComponent},
  {path: 'dominos', component: DominosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[BKRComponent, CocaColaComponent, DominosComponent]