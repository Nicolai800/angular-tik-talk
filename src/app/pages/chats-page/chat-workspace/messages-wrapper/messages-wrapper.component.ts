import { Component } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-messages-wrapper',
  imports: [MessageComponent],
  templateUrl: './messages-wrapper.component.html',
  styleUrl: './messages-wrapper.component.scss',
})
export class MessagesWrapperComponent {}
