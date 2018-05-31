import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  model = {'title': 'smth'};
  submitted = false;
  fb = new FormGroup({
    title: new FormControl('', Validators.required)
  });
  constructor() {
  }

  ngOnInit() {
  }

  public onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }
}
