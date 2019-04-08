import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { YuGiOhCardsComponent } from './yu-gi-oh-cards/yu-gi-oh-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {AccordionModule} from 'primeng/accordion';
import { CardDetailsComponent } from './card-details/card-details.component';  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    YuGiOhCardsComponent,
    CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent},
      { path: "Yugi", component: YuGiOhCardsComponent},
      {path: "Details/:id", component: CardDetailsComponent},
      { path: "", redirectTo: "home", pathMatch: "full"},
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
