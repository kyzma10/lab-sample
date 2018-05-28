import { Component, OnInit } from '@angular/core';
import {TodosService} from '../../core/todos.service';
import {Todo} from '../../core/models/todo';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users-todo',
  templateUrl: './users-todo.component.html',
  styleUrls: ['./users-todo.component.css']
})
export class UsersTodoComponent implements OnInit {
  public todos: Todo[];
  public id: number;
  constructor(private todoService: TodosService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.todoService.getTodo(this.id).subscribe((res: Todo[]) => {
      this.todos = res;
    });
  }

}
