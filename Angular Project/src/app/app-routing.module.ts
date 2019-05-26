import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YuGiOhCardsComponent } from './yu-gi-oh-cards/yu-gi-oh-cards.component';

const routes: Routes = [ 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
