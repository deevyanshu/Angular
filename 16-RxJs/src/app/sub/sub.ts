import { Component, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { SubjectService } from '../subject-service';

@Component({
  selector: 'app-sub',
  imports: [],
  templateUrl: './sub.html',
  styleUrl: './sub.css',
})
export class Sub {
//   In Angular, an RxJS Subject is primarily used for multicasting values to multiple observers and for enabling cross-component communication. 
// Unlike a regular RxJS Observable, which is unicast (each subscriber gets its own independent data stream execution), a Subject is multicast, ensuring all subscribed observers receive the same values from a single shared source.
// 1. Subject (The "Live Stream")
// Think of a standard Subject like a live radio broadcast. If you tune in late, you missed everything that happened before you arrived. You only hear what is being broadcast at that exact moment and moving forward.

// Initial Value: None.

// Late Subscribers: They receive nothing until a new value is emitted.

// Use Case: Event-based triggers (like a button click) where the past history doesn't matter.

// 2. BehaviorSubject (The "Latest News")
// A BehaviorSubject is like a 24-hour news ticker. When you tune in, it immediately tells you the most recent headline, then keeps you updated on new ones.

// Initial Value: Required. You must give it a starting value.

// Late Subscribers: They immediately receive the "current" (last emitted) value upon subscription.

// Use Case: Application state (like the current logged-in user or a UI theme), where a new component needs to know the current status immediately.
  studentName$=new Subject<string>();

  userService=inject(SubjectService)

  constructor(){
     setTimeout(()=>{
      this.studentName$.next("Angular 20");  
     },4000)
    
    
  }

  ngOnInit(): void {
    this.studentName$.subscribe((name:string)=>console.log(name));
    this.userService.courseDuration.subscribe((duration:string)=>console.log(duration));
  }   
}
