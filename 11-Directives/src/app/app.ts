import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgFor, NgSwitch,NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, NgFor, NgSwitch, NgSwitchCase],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('11-Directives');
  show=true;
  students=['anil','vijay','suresh','ramesh']
  login=false
  color="red"
}
