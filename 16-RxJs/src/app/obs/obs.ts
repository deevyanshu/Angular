import { Component } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Component({
  selector: 'app-obs',
  imports: [],
  templateUrl: './obs.html',
  styleUrl: './obs.css',
})
export class Obs {

  cityList: string[]=['pune','indore','mumbai'] //this is normal way of storing data in array

  cityList$=of(['pune','indore','mumbai']); // reactive way using observable

  stateList$=from(["mp","mh","gj"]) // access data one by one like for loop

  

  constructor(){

    this.cityList$.subscribe((cityData:string[])=>{
      console.log(cityData);
    })

    this.stateList$.subscribe((stateData:string)=>{
      console.log(stateData);
    })
    
  }
}
