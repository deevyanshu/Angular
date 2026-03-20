import { MessageBubble } from '@/message-bubble/message-bubble';
import { ZardAvatarComponent } from '@/shared/components/avatar/avatar.component';
import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { ZardDividerComponent } from '@/shared/components/divider/divider.component';
import { ZardInputDirective } from '@/shared/components/input/input.directive';
import { Component,signal } from '@angular/core';
import { LucideAngularModule, Search, MoreVertical, Send, Plus} from 'lucide-angular';
import { FormsModule} from '@angular/forms';
import { ChatService } from '@/service/chat-service';


@Component({
  selector: 'app-chat',
  imports: [LucideAngularModule, ZardButtonComponent,ZardInputDirective,ZardDividerComponent,ZardAvatarComponent,MessageBubble, FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {
  readonly Search = Search;
  readonly MoreVertical = MoreVertical;
  readonly Send = Send;
  readonly Plus = Plus;

  constructor(private service:ChatService){

  }

  CHATS=[
    {
      id:1,
      name:"Spring boot.. ",
      lastMessage:"How to create restAPI in spring boot?",
      unread:2,
      initials:"SB"
    },
    {
      id:2,
      name:"Spring boot.. ",
      lastMessage:"How to create restAPI in spring boot?",
      unread:2,
      initials:"SB"
    },
    {
      id:3,
      name:"Spring boot.. ",
      lastMessage:"How to create restAPI in spring boot?",
      unread:2,
      initials:"SB"
    },
  ]

  CONVERSATION=[
    {
      id:1,
      author:"bot",
      text:"Hello how can i help you?",
      at:new Date().toLocaleTimeString()
    }
  ]

  messages=signal<any[]>(this.CONVERSATION);
  draft='';

  sendMessage(){
    // this.messages.push({
    //   id:3,
    //   author:"user",
    //   text:"help me with database",
    //   at:"10:01 AM"
    // })

    // let textMessage=this.draft.trim();
    // if(!textMessage) return;
    // console.log("send message",this.draft);

    this.messages.update(msgs => [
      ...msgs, 
      {
        id: msgs.length + 1,
        author: "user",
        text: this.draft,
        at: new Date().toLocaleTimeString()
      }
    ]);
      this.service.sendMessage(this.draft,"2").subscribe((response:string)=>{
        console.log("response from server",response);
        this.messages.update(msgs => [
          ...msgs,
          {
            id: msgs.length + 1,
            author: "bot",
            text: response,
            at: new Date().toLocaleTimeString()
          }
        ]);
        console.log("messages: "+this.messages)
      })
  
      this.draft='';

  }

  
}
