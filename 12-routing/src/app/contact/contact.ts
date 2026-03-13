import { Component } from '@angular/core';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  username:null|string="";
  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void {
     this.username=this.route.snapshot.paramMap.get('name');
     console.log(this.username)

    //this.username=this.route.snapshot.queryParamMap.get('name')
  }
}
