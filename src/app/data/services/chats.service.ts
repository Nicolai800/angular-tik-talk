import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ChatsServise {
  http = inject(HttpClient);
  baseUrl = 'https://icherniakov.ru/yt-course/';
  chatsUrl = `${this.baseUrl}chat/`;
  messageUrl = `${this.baseUrl}message/`;

  createChat(userId: number) {
    return this.http.post(`${this.chatsUrl}${userId}`, {});
  }

  getMyChats() {
    return this.http.get(`${this.chatsUrl}get_my_chats/`);
  }

  getChatById(chatId: number) {
    return this.http.get(`${this.chatsUrl}${chatId}`);
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
