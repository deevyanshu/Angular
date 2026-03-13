import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('09-ToDo');
  taskList = signal<string[]>([]);
  taskList1:string[]=[]
  taskInput:string=''

  addTask(){
    this.taskList.set([...this.taskList(), this.taskInput])
    this.taskList1.push(this.taskInput)
  }

  deleteTask(i:number){
    alert('Are you sure you want to delete this task?')
    this.taskList.set(this.taskList().splice(i,1))
    this.taskList1 = this.taskList1.splice(i,1)
    console.log(this.taskList())
    
  }
}
