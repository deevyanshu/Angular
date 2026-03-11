import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('06-controlflow');
  display=true
  users=["anil","banu","cengiz"]

  hide(){
    this.display=false
  }

  show(){
    this.display=true
  }

  toogle(){
    this.display=!this.display
  }

}
