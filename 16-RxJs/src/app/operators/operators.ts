import { Component } from '@angular/core';
import { error } from 'console';
import { from, filter, of, map, tap, forkJoin, debounceTime, switchMap } from 'rxjs';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-operators',
  imports: [ReactiveFormsModule],
  templateUrl: './operators.html',
  styleUrl: './operators.css',
})
export class Operators {
  noList$=from([1,2,3,4,5]);

  rollList$=of([1,2,3,4,5]);

  stateData$=of(["mp","mh","goa"])
  cityData$=of(["indore","mumbai","panaji"])

  searchControl=new FormControl();

  constructor() {
    this.noList$.pipe(
      filter(num=>num%2==0)
    ).subscribe((res:number)=>{
      console.log(res)
    })

    //map operator to modify the data and return a new observable with the modified data 
    this.rollList$.pipe(
      map((res)=>res.filter(num=>num%2==0))
    ).subscribe((res)=>{
      console.log(res);
    })

    //tap allows to read original data without modifying it and perform side effects like logging or debugging
    this.rollList$.pipe(
      tap((res)=>console.log('Original data:', res)),
      map((res)=>res.filter(num=>num%2==0))
    ).subscribe((res)=>{
      console.log("final res:", res);
    })

//     allows you to wrap multiple observables and wait for all of them to complete before emitting a single final  value (an array or object containing the results).

// It is most commonly used when you need to make multiple HTTP requests that are independent of each other but are all required to initialize a page.

// 1. How forkJoin Works
// Wait for Completion: It only emits once every input observable has finished (completed).

// Final Values Only: It only captures the last value emitted by each observable.

// Failure Policy: If any one of the observables errors out, the entire forkJoin fails immediately, and you lose the data from the successful ones (unless you handle errors individually).
    forkJoin([this.cityData$,this.stateData$]).subscribe((res:any)=>{
      console.log("City and State Data:", res);
    },error=>{
      console.error("Error in one of the observables:", error);
    })

    //switchMap is the go-to flattening operator for handling asynchronous operations that should be cancelled if a new request comes in.

// The "switch" in its name is literal: whenever a new value arrives from the source, it switches to the new observable and cancels the previous one.

// 1. How switchMap Works
// Cancellation: If an HTTP request is currently in progress and the user triggers a new one, the first request is immediately aborted.

// Flattening: It takes an observable (like a click or a form change) and "maps" it into another observable (like an HTTP call), returning the result directly.

// Memory Safety: It helps prevent "race conditions" where an older, slower request might finish after a newer one and overwrite your data with stale information.

    // this.searchControl.valueChanges.pipe(
    //   debounceTime(300), // Wait for 300ms of inactivity before processing the input
    //   switchMap(searchTerm => this.apiService.search(searchTerm))
    // ).subscribe(res=>{
    //   console.log(res);
    // })

//     mergeMap (also known as flatMap) allows you to handle multiple inner observables simultaneously. It doesn't care about the order of completion, and it doesn't cancel anything. It simply "merges" all the resulting streams into one.

// 1. How mergeMap Works
// Concurrency: It allows multiple internal subscriptions to be active at the exact same time.

// No Cancellation: If the source emits 10 times, mergeMap will fire 10 requests immediately.

// Order: Results are emitted as soon as they finish. If the second request finishes before the first, you’ll see the second result first.

    // of(1,2,3,4,5,6).pipe(
    //   mergeMap((id)=>this.service.getData(`https://jsonplaceholder.typicode.com/posts/${id}`)),
    // ).subscribe((res)=>{
    //   this.mergeMapData.push(res);
    // })

    // 4.ConcatMap operator(flattening operator):-sed to process values from a source Observable sequentially, mapping each value to an inner Observable and subscribing to these inner Observables one after the other. It ensures that the inner Observables are executed in order, waiting for one to complete before subscribing to the next. This makes it suitable for scenarios where the order of operations is crucial, such as when working with APIs or promises that need to be executed sequentially. Unlike switchMap, which cancels the previous inner Observable when a new value arrives from the source, and mergeMap, which processes inner Observables concurrently, concatMap maintains the order of execution.
    //this will call API synchronously and sequence of order is maintained. it will wait for 1 to complete and then call 2.
    // of(1,2,3,4,5,6).pipe(
      
    //   concatMap((value) => this.service.getData(`https://jsonplaceholder.typicode.com/posts/${value}`) 
    // )
    // ).subscribe((res)=>{
    //   this.concatMapData.push(res);
    // })

    // 5.Exhaust Map operator:- helps manage asynchronous operations by: Subscribing to an inner observable returned by a provided function. Ignoring any new values emitted by the source observable while the inner observable is still in progress. Emitting the values emitted by the inner observable once it completes. Think of it like this: if you rapidly click a button that triggers an API call, exhaustMap will only process the first click and ignore subsequent clicks until the initial API request finishes. This is incredibly useful for preventing race conditions and managing concurrent operations.
    // this.btnsub.pipe(
    //   exhaustMap(() => this.onclick())
    // ).subscribe((res)=>{
    //   this.exhaustMapData.push(res);
    // })

  }

  // onclick()
  // {
  //   return this.service.getData("https://jsonplaceholder.typicode.com/posts/1").pipe(
  //   map((res:any)=> res),   
  //   delay(2000)
  //   );
  // }

}
