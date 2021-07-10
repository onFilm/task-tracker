import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes, faBell, faBellSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  icon: any;
  iconColor: any = "";
  
  constructor() { }

  ngOnInit(): void {
    if(this.task.reminder === true) {
      this.icon = faBell;
      this.iconColor = "green";
    } else {
      this.icon = faBellSlash;
      this.iconColor = "red";
    }
  }

  onDelete (id: any) {
    this.onDeleteTask.emit(id);
  }
}
