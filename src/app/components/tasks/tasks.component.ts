import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks =  tasks);
  }

  deleteTask(id: any) {
    this.taskService.deleteTask(id).subscribe(
      () => (this.tasks = this.tasks.filter(t => t.id !== id))
      );
  }

  toggleTaskReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.toggleTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }

}
