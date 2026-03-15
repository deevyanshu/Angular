import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('14-DataPassing');
  user="abc"

  onSlectedUser(user:string)
  {
    this.user=user
  }

  getChildData(data:string){
    console.log(data);
  }
}
