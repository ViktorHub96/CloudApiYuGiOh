import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu-tool-bar',
  templateUrl: './menu-tool-bar.component.html',
  styleUrls: ['./menu-tool-bar.component.css']
})
export class MenuToolBarComponent implements OnInit {

  constructor() { }

  private items: MenuItem[];
    
    ngOnInit() {
        this.items = [
            {label:'Home', url:'/home'},
            {label:'Cards', url:'/Yugi'},
            {label:'Decks', url:'/decks'}
        ];
    }

}
