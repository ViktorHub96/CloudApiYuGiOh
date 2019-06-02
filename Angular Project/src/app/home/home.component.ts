import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router) { }
  public result: any = [];
  public time: any = [];

  ngOnInit() {
    this.http.get("https://db.ygoprodeck.com/api/v4/cardinfo.php?name=10000020")
    .subscribe(data => {
      this.result = data;
      console.log(this.result)
      console.log("Slifer the dragon")
    },err => console.log(err));
  
  }

}

