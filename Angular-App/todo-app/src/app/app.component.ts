import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  OnInit,
} from '@angular/core';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @Output() editEvent = new EventEmitter<any>();
  @ViewChild(TodoFormComponent)
  private todoForm: TodoFormComponent | undefined;

  title = 'todo-app';
  tasks: any[] = [];

  ngOnInit(): void {
    this.load();
  }

  onAdd(item: any): void {
    this.tasks.push({
      id: Math.random() * 1000,
      name: item.name,
      priority: item.priority,
      status: item.status,
    });
    this.save();
  }

  onDelete(id: any): void {
    this.tasks = this.tasks.filter((x) => x.id !== id);
    this.save();
  }

  onEdit(id: any): void {
    this.todoForm?.onEdit(this.tasks.filter((x) => x.id === id)[0]);
  }

  onSave(item: any): void {
    this.tasks.forEach((x) => {
      if (x.id === item.id) {
        x.name = item.name;
        x.priority = item.priority;
        x.status = item.status;
        return;
      }
    });
    this.save();
  }

  save() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  load() {
    let tasksFromStorage = localStorage.getItem('tasks');
    if (tasksFromStorage != null) {
      this.tasks = JSON.parse(tasksFromStorage);
    } else {
      this.tasks = [];
    }
  }
}
