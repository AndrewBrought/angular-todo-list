import { Component, OnInit, Input } from '@angular/core';
import {Todo} from '../../models/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

//  Set Dynamic class
  // tslint:disable-next-line:typedef
  setClass() {
    // tslint:disable-next-line:no-unused-expression
    const classes = {
      // tslint:disable-next-line:label-position no-unused-expression
      todo: true,
      // tslint:disable-next-line:align
      'is-complete': this.todo.completed
    };

    return classes;
  }

}
