import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  constructor(private router: Router){

  }

  goToContact(name:string){
    alert("Going to contact page");
    //this.router.navigate(['/contact',{name:"John Doe"}]); this is to catch name from snapshot in contact component
    this.router.navigate(['/contact',{name:name}]);
    //this.router.navigate(['/contact',name]);
  }
}
