import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text: any;
  day: any;
  tags: any;
  reminder: boolean = false;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(!this.text) {
     alert("please enter task");
     return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      tags: this.tags,
      reminder: this.reminder
    };

    return this.onAddTask.emit(newTask);
  }

}
