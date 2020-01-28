import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  isAuth: boolean = false;
  pseudo: string = '';
  messages: [] = [];

  //TODO use firebase instead of localstorage
  //TODO improve & complexify

  constructor(private router: Router) { }

  isAuthentificated() {
    return this.isAuth;
  }

  logInUser(pseudo : string) {
    this.isAuth = true;
    this.pseudo = pseudo;
    this.router.navigate(['/chatbox']);
  }

  addMessage(messageText) {
    this.fetchMessages();
    this.messages.push({'text': messageText, author: this.pseudo});
    localStorage.setItem('bbz-messages', JSON.stringify(this.messages));
  }

  fetchMessages() {
    this.messages = JSON.parse(localStorage.getItem('bbz-messages') || '[]');
  }

  getMessages() {
    this.fetchMessages();
    return this.messages;
  }

}