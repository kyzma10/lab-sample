import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTodoComponent } from './users-todo.component';

describe('UsersTodoComponent', () => {
  let component: UsersTodoComponent;
  let fixture: ComponentFixture<UsersTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
