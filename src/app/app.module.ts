import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './component/login/login.component';
import { UserService } from './service/user.service';
import { ChatBoxComponent } from './component/chat-box/chat-box.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialModule, AppRoutingModule ],
  declarations: [ AppComponent, LoginComponent, ChatBoxComponent],
  bootstrap:    [ AppComponent ],
  providers: [UserService]
})
export class AppModule { }
