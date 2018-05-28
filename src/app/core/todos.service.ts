import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private http: HttpClient) {}

  public getTodo(userId) {
    return this.http.get(`http://localhost:3030/todos?userId=${userId}`);
  }

  public completedTodo(todoId) {
    return this.http.patch(`http://localhost:4200/users/${todoId}`, {'completed': true});
  }
}
