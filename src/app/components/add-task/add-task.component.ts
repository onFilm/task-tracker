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
  displayNotification: boolean = false;
  subscription: Subscription;


  constructor(private uiService: UiService ) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
   }

  ngOnInit(): void {
  }

  onSubmit(addTaskForm: NgForm): void {
    if(!this.text) {
     alert("please enter task");
     return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      tags: this.tags.trim().split(','),
      reminder: this.reminder
    };
    addTaskForm.reset();
    this.toggleNotificationOff();
    return this.onAddTask.emit(newTask);
  }

  clearForm(addTaskForm: NgForm): void {
    this.displayNotification = false;
    addTaskForm.reset();
  }

  toggleNotificationOff() {
    this.displayNotification = !this.displayNotification;
  }

}
