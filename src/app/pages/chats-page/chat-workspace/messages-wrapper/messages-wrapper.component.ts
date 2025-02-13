import { Component, inject, input } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { MessageInputComponent } from '../../../../common-ui/message-input/message-input.component';
import { ChatsServise } from '../../../../data/services/chats.service';
import { Chat } from '../../../../data/interfaces/chats.interface';

@Component({
  selector: 'app-messages-wrapper',
  imports: [MessageComponent, MessageInputComponent],
  templateUrl: './messages-wrapper.component.html',
  styleUrl: './messages-wrapper.component.scss',
})
export class MessagesWrapperComponent {
  chatsServise = inject(ChatsServise);

  chat = input.required<Chat>();

  onSendMessage(messageText: string) {
    this.chatsServise.sendMessage(this.chat().id, messageText);
  }
}
