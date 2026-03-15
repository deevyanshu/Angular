import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input() user:string='';

  @Output() getData=new EventEmitter(); 
  data:string="data from child";

  ngOnInit(): void {
    this.getData.emit(this.data);
  }
}
