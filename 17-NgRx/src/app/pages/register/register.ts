import { Component } from '@angular/core';
import { Button } from '../../shared/components/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [Button, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
  host: {
    class: 'min-h-screen flex items-center justify-center bg-slate-100 p-4'
  }
})
export class Register {}
