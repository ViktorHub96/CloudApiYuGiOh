import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-yu-gi-oh-cards',
  templateUrl: './yu-gi-oh-cards.component.html',
  styleUrls: ['./yu-gi-oh-cards.component.css']
})
export class YuGiOhCardsComponent implements OnInit {

  public result: any = {};

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {

    this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php")
      .subscribe(data => {
        this.result = data;
        console.log(this.result)
      },err => console.log(err));
    
    
  }

}
