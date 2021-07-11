import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: any;
  day: any;
  tags: any;
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription;


  constructor(private uiService: UiService ) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
   }

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
      tags: this.tags.split(','),
      reminder: this.reminder
    };

    return this.onAddTask.emit(newTask);
  }

  clearForm(addTaskForm: NgForm): void {
    addTaskForm.reset();
  }

}
