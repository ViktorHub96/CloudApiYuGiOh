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
  syntax : string = "";

  constructor(private http: HttpClient,private router: Router) {
    this.optie = [
      {name: 'Search by Card Name', code: 'CN'},
      {name: 'Search by Card Text', code: 'CT'},
      {name: 'Search by Pendulum Effect', code: 'PE'},
      {name: 'Search by Card Number', code: 'CNU'},
     
    ];
   }

  ngOnInit() {
    
    this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php" + this.syntax)
    .subscribe(data => {
      this.result = data;
      console.log(this.result)
      console.log("Kaarten laden")
    },err => console.log(err));
  }
  /*ngDoCheck(){
    this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php" + this.syntax)
    .subscribe(data => {
      this.result = data;
      console.log(this.result)
      console.log("Kaarten laden")
    },err => console.log(err));

  }*/
  test(){
    this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php")
    .subscribe(data => {
      this.result = data;
      console.log(this.result)
      console.log("Kaarten laden")
    },err => console.log(err));
  

  }
  ngOnChanges(){
    this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php" + this.syntax)
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
  water(){  
    this.syntax = "?attribute=water"
    this.ngOnInit();
  }
  dark(){
    this.syntax = "?attribute=dark"
    this.ngOnInit();
  }
  earth(){
    this.syntax = "?attribute=earth"
    this.ngOnInit();
  }
  divine(){
    this.syntax = "?attribute=divine"
    this.ngOnInit();
  }
  light(){
    this.syntax = "?attribute=light"
    this.ngOnInit();
  }
  fire(){
    this.syntax = "?attribute=fire"
    this.ngOnInit();

  }
  wind(){
    this.syntax = "?attribute=wind"
    this.ngOnInit();
  }
  equip(){
    this.syntax="?type=spell%20card&race=equip"
    this.ngOnInit();
  }
  field(){
    this.syntax="?type=spell%20card&race=field"
    this.ngOnInit();
  }
  quikplay(){
    this.syntax="?type=spell%20card&race=Quick-Play"
    this.ngOnInit();
  }
  ritual(){
    this.syntax ="?type=spell%20card&race=Ritual"
    this.ngOnInit();
  }
  cont(){
    this.syntax="?race=Continuous"
    this.ngOnInit();
  }
  counter(){
    this.syntax="?race=Counter"
    this.ngOnInit();
  }
  normal(){
    this.syntax = "?race=Normal"
    this.ngOnInit();
  }
}
