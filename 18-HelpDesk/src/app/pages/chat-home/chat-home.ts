import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { Component } from '@angular/core';
import { LucideAngularModule, BotIcon} from 'lucide-angular';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-chat-home',
  imports: [ZardButtonComponent, LucideAngularModule, RouterLink],
  templateUrl: './chat-home.html',
  styleUrl: './chat-home.css',
})
export class ChatHome {
  readonly BotIcon= BotIcon;

  constructor(private router:Router){

  }

  handleChatStart(){
    this.router.navigate(['/chat']);
  }
}
