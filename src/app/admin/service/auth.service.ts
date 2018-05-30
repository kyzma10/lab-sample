import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoged = false;

  changeLogIn () {
    this.isLoged = true;
  }

  changeLogOut () {
    this.isLoged = false;
  }
}
