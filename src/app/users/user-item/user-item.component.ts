import { Component, OnInit, Input } from '@angular/core';
import {User} from '../../core/models/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() private user: User;

  ngOnInit() {
  }

}
