import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  user: any = {};
  result: any = {};
  cardsInDeck: any = []

  constructor(private route : ActivatedRoute, private http:HttpClient, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params =>

      this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php?name=" + params.id)
        .subscribe(data => {
          this.result = data;
          console.log(params.id)
          console.log(data)
          console.log(this.result)
        }));

        
  }

}
