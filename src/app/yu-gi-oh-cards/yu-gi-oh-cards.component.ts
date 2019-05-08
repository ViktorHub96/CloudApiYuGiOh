import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-yu-gi-oh-cards',
  templateUrl: './yu-gi-oh-cards.component.html',
  styleUrls: ['./yu-gi-oh-cards.component.css']
})
export class YuGiOhCardsComponent implements OnInit {

  public result: any = [];

  constructor(private http: HttpClient,private router: Router) { }

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
