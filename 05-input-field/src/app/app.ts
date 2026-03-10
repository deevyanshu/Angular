import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('05-input-field');
  name:string=""
  displayName:string=""
  email:string=""

  getName(event:Event){
    this.name=(event.target as HTMLInputElement).value
    console.log(this.name)
  }

  //this is for get value on click event above is for get value on input event directly from input field
  showName(){
    this.displayName=this.name
  }

  setName(){
    this.name="peter"
  }

  getEmail(val:string){
    this.email=val
    console.log(val)
  }
}
