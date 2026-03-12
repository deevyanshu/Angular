import { Component, signal, effect, WritableSignal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  } from '../../node_modules/@angular/core/types/core';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('07-signals');
  count=signal<number>(10)
  x=signal(20);
  y=signal(30);
  z=computed(()=>this.x()+this.y());
  data:WritableSignal<string | number> = signal<number|string>('Hello World')

  constructor() {
    effect(() => 
      console.log(this.data())
    );
    effect(() => 
      console.log(this.count())
    );
  }

  updateValue(){
    this.count.set(100)
  }

  update(){
    this.data.set("updated")
  }

  computedValue(){
    console.log(this.z());
    this.x.set(100);
    console.log(this.z());
  }
}
