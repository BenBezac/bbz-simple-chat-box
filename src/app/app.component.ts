import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './service/user.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private router: Router, private userService: UserService) {}

   ngOnInit() {
      if( !this.userService.isAuthentificated()) {
        this.router.navigate(['/login']);
      } else {        
        this.router.navigate(['/chatbox']);
      }
    }
}
