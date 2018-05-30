import { Component, OnInit } from '@angular/core';
import { AuthService } from '../admin/service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  logIn() {
    this.auth.changeLogIn();
  }

  logOut () {
    this.auth.changeLogOut();
  }
  ngOnInit() {
  }

}
