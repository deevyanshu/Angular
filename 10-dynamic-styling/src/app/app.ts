import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('10-dynamic-styling');
  bgColor="red"
  fontsize="30px"
  headingSizeBig="80px"
  headingSizeSmall="20px"

  zoom=true

  updateHeadingSize(){
    this.zoom=!this.zoom
  }
}
