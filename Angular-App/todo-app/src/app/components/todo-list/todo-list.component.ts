import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() tasks: any[] = [];
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() editEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onDelete(id: any): void {
    this.deleteEvent.emit(id);
  }

  onEdit(id: any): void {
    this.editEvent.emit(id);
  }
}
