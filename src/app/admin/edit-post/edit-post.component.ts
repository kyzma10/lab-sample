import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  model = {'title': 'smth'};
  submitted = false;
  constructor() { }

  ngOnInit() {
  }

  public onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }
}
