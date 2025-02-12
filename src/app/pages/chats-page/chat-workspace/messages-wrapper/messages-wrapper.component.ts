import { Component } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { MessageInputComponent } from '../../../../common-ui/message-input/message-input.component';

@Component({
  selector: 'app-messages-wrapper',
  imports: [MessageComponent, MessageInputComponent],
  templateUrl: './messages-wrapper.component.html',
  styleUrl: './messages-wrapper.component.scss',
})
export class MessagesWrapperComponent {}
