import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {SelectItem} from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-yu-gi-oh-cards',
  templateUrl: './yu-gi-oh-cards.component.html',
  styleUrls: ['./yu-gi-oh-cards.component.css']
})


export class YuGiOhCardsComponent implements OnInit {
  
  public result: any = [];
  public optie: City[];
  public Options: City;

  constructor(private http: HttpClient,private router: Router) {
    this.optie = [
      {name: 'Search by Card Name', code: 'CN'},
      {name: 'Search by Card Text', code: 'CT'},
      {name: 'Search by Pendulum Effect', code: 'PE'},
      {name: 'Search by Card Number', code: 'CNU'},
     
    ];
   }

  ngOnInit() {

   
    
  }
  test(){
    this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php")
    .subscribe(data => {
      this.result = data;
      console.log(this.result)
      console.log("Kaarten laden")
    },err => console.log(err));
  

  }
  spel()
  {
    this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php?type=spell%20card")
      .subscribe(data => {
        this.result = data;
        console.log(this.result)
        console.log("Spel Kaarten laden")
      },err => console.log(err));
  }

}
