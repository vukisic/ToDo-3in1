import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  taskForm = this.fb.group({
    taskName: ['', Validators.required],
    taskPriority: ['', Validators.required],
    taskStatus: ['', Validators.required],
  });

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
      console.log(this.taskName?.value);
      console.log(this.taskPriority?.value);
      console.log(this.taskStatus?.value);
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
}
