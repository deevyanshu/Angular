import { Component, signal } from '@angular/core';
import { Button } from '../../shared/components/button';
import { RouterLink } from '@angular/router';
import { form, Field } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [Button, RouterLink,Field, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  host: {
    class: 'min-h-screen flex items-center justify-center bg-slate-100 p-4',
  },
})
export class Login {
  loginModel= signal({
    username: '',
    password: ''
  })

  loginForm= form(this.loginModel)

  onSubmit(event:any) {
    event.preventDefault();
    if(this.loginForm().valid()){
      console.log('login dat: ',this.loginForm().value())
    }else{
      console.log("form is invalid")
    }
  }
    


}
