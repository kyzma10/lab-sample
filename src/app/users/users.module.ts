import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {UsersListComponent} from './users-list/users-list.component';
import {UserItemComponent} from './user-item/user-item.component';
import {UsersTodoComponent} from './users-todo/users-todo.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersListComponent,
    UserItemComponent,
    UsersTodoComponent
  ]
})
export class UsersModule { }
