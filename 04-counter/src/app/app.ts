import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('04-counter');
  count:number=0;

  handleIncrement(){
    this.count++;
  }

  handleReset(){
    this.count=0;
  }

  handleDecrement(){
    this.count--;
  }

  handleCounter(val:string){
    if(val==='increment'){
      this.handleIncrement();
    }else if(val==='decrement'){
      this.handleDecrement();
    }else
    {      this.handleReset();} 
}
}
