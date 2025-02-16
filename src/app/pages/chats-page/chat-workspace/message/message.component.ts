import { Component, input } from '@angular/core';
import { Message } from '../../../../data/interfaces/chats.interface';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  message = input.required<Message>();
}
