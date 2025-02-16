import { Component, inject, input, signal } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { MessageInputComponent } from '../../../../common-ui/message-input/message-input.component';
import { ChatsServise } from '../../../../data/services/chats.service';
import { Chat, Message } from '../../../../data/interfaces/chats.interface';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-messages-wrapper',
  imports: [MessageComponent, MessageInputComponent],
  templateUrl: './messages-wrapper.component.html',
  styleUrl: './messages-wrapper.component.scss',
})
export class MessagesWrapperComponent {
  chatsServise = inject(ChatsServise);

  chat = input.required<Chat>();

  messages = signal<Message[]>([]);

  ngOnInit() {
    this.messages.set(this.chat().messages);
  }

  async onSendMessage(messageText: string) {
    await firstValueFrom(
      this.chatsServise.sendMessage(this.chat().id, messageText)
    );
    const chat = await firstValueFrom(
      this.chatsServise.getChatById(this.chat().id)
    );
    this.messages.set(chat.messages);
  }
}
