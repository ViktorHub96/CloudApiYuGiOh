import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';



@Component({
  selector: 'app-login-fire-base',
  templateUrl: './login-fire-base.component.html',
  styleUrls: ['./login-fire-base.component.css']
})

export class LoginFireBaseComponent implements OnInit {
  constructor(private  authService:  AuthService) { }
  ngOnInit() {}
}


