import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes, faBell, faBellSlash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnChanges {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() clickToToggle: EventEmitter<Task> = new EventEmitter();

  deleteIcon: any = faTrashAlt;
  icon: any;
  iconColor: any = "";
  
  constructor() { }

  ngOnChanges(): void {
    if(this.task.reminder === true) {
      this.icon = faBell;
      this.iconColor = true;
    } else {
      this.icon = faBellSlash;
      this.iconColor = false;
    }
  }

  onDelete (id: any) {
    this.onDeleteTask.emit(id);
  }

  toggleOnBellIconClick (task: Task) {
    this.clickToToggle.emit(task);
  }
}
