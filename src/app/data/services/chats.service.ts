import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Chat } from '../interfaces/chats.interface';

@Injectable({ providedIn: 'root' })
export class ChatsServise {
  http = inject(HttpClient);
  baseUrl = 'https://icherniakov.ru/yt-course/';
  chatsUrl = `${this.baseUrl}chat/`;
  messageUrl = `${this.baseUrl}message/`;

  createChat(userId: number) {
    return this.http.post<Chat>(`${this.chatsUrl}${userId}`, {});
  }

  getMyChats() {
    return this.http.get<Chat[]>(`${this.chatsUrl}get_my_chats/`);
  }

  getChatById(chatId: number) {
    return this.http.get<Chat>(`${this.chatsUrl}${chatId}`);
  }

  sendMessage(chatId: number, message: string) {
    return this.http.post(
      `${this.messageUrl}${chatId}`,
      {},
      {
        params: { message },
      }
    );
  }
}
