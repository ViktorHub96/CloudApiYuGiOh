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
    this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php")
    .subscribe(data => {
      this.result = data;
      console.log(this.result)
      console.log("Kaarten laden")
    },err => console.log(err));

   
    
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
  water(){  
    this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php?attribute=water")
      .subscribe(data => {
        this.result = data;
        console.log(this.result)
        console.log("water Kaarten laden")
      },err => console.log(err));
  }
  dark(){
    this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php?attribute=dark")
      .subscribe(data => {
        this.result = data;
        console.log(this.result)
        console.log("dark Kaarten laden")
      },err => console.log(err));

  }
  earth(){
    this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php?attribute=earth")
      .subscribe(data => {
        this.result = data;
        console.log(this.result)
        console.log("earth Kaarten laden")
      },err => console.log(err));

  }
  divine(){
    this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php?attribute=divine")
      .subscribe(data => {
        this.result = data;
        console.log(this.result)
        console.log("divine Kaarten laden")
      },err => console.log(err));

  }
  light(){
    this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php?attribute=light")
      .subscribe(data => {
        this.result = data;
        console.log(this.result)
        console.log("light Kaarten laden")
      },err => console.log(err));

  }
  fire(){
    this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php?attribute=fire")
      .subscribe(data => {
        this.result = data;
        console.log(this.result)
        console.log("fire Kaarten laden")
      },err => console.log(err));

  }
  wind(){
    this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php?attribute=wind")
      .subscribe(data => {
        this.result = data;
        console.log(this.result)
        console.log("wind Kaarten laden")
      },err => console.log(err));

  }
  equip(){
    this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php?type=spell%20card&race=equip")
      .subscribe(data => {
        this.result = data;
        console.log(this.result)
        console.log("Spel Kaarten laden")
      },err => console.log(err));
  }
  field(){
    this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php?type=spell%20card&race=field")
      .subscribe(data => {
        this.result = data;
        console.log(this.result)
        console.log("Spel Kaarten laden")
      },err => console.log(err));
  }
  quikplay(){
    this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php?type=spell%20card&race=Quick-Play")
      .subscribe(data => {
        this.result = data;
        console.log(this.result)
        console.log("Spel Kaarten laden")
      },err => console.log(err));
  }
  ritual(){
    this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php?type=spell%20card&race=Ritual")
      .subscribe(data => {
        this.result = data;
        console.log(this.result)
        console.log("Spel Kaarten laden")
      },err => console.log(err));
  }
  cont(){
    this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php?race=Continuous")
      .subscribe(data => {
        this.result = data;
        console.log(this.result)
        console.log("Continuous Kaarten laden")
      },err => console.log(err));
  }
  counter(){
    this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php?race=Counter")
      .subscribe(data => {
        this.result = data;
        console.log(this.result)
        console.log("Continuous Kaarten laden")
      },err => console.log(err));
  }
  normal(){
    this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php?race=Normal")
      .subscribe(data => {
        this.result = data;
        console.log(this.result)
        console.log("Continuous Kaarten laden")
      },err => console.log(err));
  }
  

}
