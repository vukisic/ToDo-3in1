import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  tasks: any[] = [
    {
      name: 'Taks 1',
      priority: '1',
      status: '1',
    },
    {
      name: 'Taks 2',
      priority: '2',
      status: '2',
    },
    {
      name: 'Taks 3',
      priority: '3',
      status: '3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
