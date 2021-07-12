import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Task } from 'src/app/Task';
import { faBell, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

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
  icon: any = faBell;
  
  constructor() { }

  ngOnChanges(): void {

  }

  onDelete (id: any) {
    this.onDeleteTask.emit(id);
  }

  toggleOnBellIconClick (task: Task) {
    this.clickToToggle.emit(task);
  }
}
