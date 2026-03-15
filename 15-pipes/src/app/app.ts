import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CurrencyconvertorPipe } from './pipe/currencyconvertor-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CurrencyconvertorPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('15-pipes');

  heading="heading";

  date=new Date();

  currency=10;

}
