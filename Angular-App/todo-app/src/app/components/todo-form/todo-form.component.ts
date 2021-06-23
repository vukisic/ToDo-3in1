import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @Output() addEvent = new EventEmitter<any>();
  @Output() saveEvent = new EventEmitter<any>();
  taskForm = this.fb.group({
    taskName: ['', Validators.required],
    taskPriority: ['', Validators.required],
    taskStatus: ['', Validators.required],
  });
  isEdit: boolean = false;
  editId: any;

  get taskName() {
    return this.taskForm.get('taskName');
  }

  get taskPriority() {
    return this.taskForm.get('taskPriority');
  }

  get taskStatus() {
    return this.taskForm.get('taskStatus');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.taskForm.valid) {
      if (this.isEdit) {
        this.saveEvent.emit({
          id: this.editId,
          name: this.taskName?.value,
          priority: this.taskPriority?.value,
          status: this.taskStatus?.value,
        });
        this.isEdit = false;
        this.editId = undefined;
      } else {
        this.addEvent.emit({
          name: this.taskName?.value,
          priority: this.taskPriority?.value,
          status: this.taskStatus?.value,
        });
      }

      this.resetForm();
    } else {
      console.log('Invalid');
    }
  }

  resetForm() {
    this.taskForm.reset();
    this.taskForm.patchValue({
      taskName: '',
      taskPriority: '',
      taskStatus: '',
    });
  }

  public onEdit(item: any): void {
    this.isEdit = true;
    this.taskForm.reset();
    this.editId = item.id;
    this.taskForm.patchValue({
      taskName: item.name,
      taskPriority: item.priority,
      taskStatus: item.status,
    });
  }
}
