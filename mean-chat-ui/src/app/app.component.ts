import { Component } from '@angular/core';

import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-chat';
  message: string;
  constructor(
    private appService: AppService
  ) { }
  sendNewMessage(message): void {
    this.appService.newMessage(message)
      .subscribe(message => {
        this.message = message;
      })
    this.message = '';
  }
}
