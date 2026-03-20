import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-message-bubble',
  imports: [],
  templateUrl: './message-bubble.html',
  styleUrl: './message-bubble.css',
})
export class MessageBubble {
  @Input() key=0;
  @Input() author='';
  @Input() at='';
  @Input() text='';

  
  ngOnInit(): void {
    console.log(this.author)
  }
}
