import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl,ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('13-forms');
  // name=new FormControl()
  // password=new FormControl()

  // displayValue(){
  //   console.log(this.name.value,this.password.value)
  // }

  // setValue(){
  //   this.name.setValue('John Doe')
  //   this.password.setValue('123456')
  // }

  profileForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    email:new FormControl('',[Validators.required,Validators.email])
  })

  onSubmit(){
    console.log(this.profileForm.value)
  }

  get name(){
    return this.profileForm.get('name')
  }
}
