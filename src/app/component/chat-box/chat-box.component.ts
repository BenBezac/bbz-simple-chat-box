import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service'

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  pseudo: string = "Nobody";
  messageInputValue: string;
  messages: [] = [];

  constructor(private userService: UserService) { 
    this.pseudo = this.userService.pseudo;
    this.messages = this.userService.getMessages();
    setInterval( () => {
      console.log('Fetching data from server !');
      this.messages = this.userService.getMessages();
    }, 5000);
  }

  ngOnInit() {
  }

  addMessage(text) {
    this.userService.addMessage(this.messageInputValue);
    this.messageInputValue = "";
  }

}