import { Component, OnInit } from '@angular/core';
import { User } from '../../core/models/user';
import {UsersService} from '../../core/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public users: User[];
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((res: User[]) => {
      this.users = res;
      // console.log(this.users);
    });
  }

}
