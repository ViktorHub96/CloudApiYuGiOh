import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { YuGiOhCardsComponent } from './yu-gi-oh-cards/yu-gi-oh-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {AccordionModule} from 'primeng/accordion';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {InputTextModule} from 'primeng/inputtext';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardDetailsComponent } from './card-details/card-details.component';
import { MenuToolBarComponent } from './menu-tool-bar/menu-tool-bar.component';  
import { FormsModule} from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    YuGiOhCardsComponent,
    CardDetailsComponent,
    MenuToolBarComponent,
    
 
  ],
  imports: [
    BrowserModule,
    DropdownModule,
    BrowserAnimationsModule,
    ButtonModule,
    BreadcrumbModule,
    FormsModule,
    InputTextModule,
    AccordionModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent},
      { path: "Yugi", component: YuGiOhCardsComponent},
      {path: "Menu", component:MenuToolBarComponent},
      {path: "Details/:id", component: CardDetailsComponent},
      { path: "", redirectTo: "home", pathMatch: "full"},
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
