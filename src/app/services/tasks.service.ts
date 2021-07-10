import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable} from 'rxjs';
import { Task } from 'src/app/Task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl= "http://localhost:5000/tasks";

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
     return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(id: number): Observable<typeof id> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<typeof id>(url);
  }
}
