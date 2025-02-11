import { Component, inject } from '@angular/core';
import { ChatsBtnComponent } from '../chats-btn/chats-btn.component';
import { ChatsServise } from '../../../data/services/chats.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chats-list',
  imports: [ChatsBtnComponent, CommonModule],
  templateUrl: './chats-list.component.html',
  styleUrl: './chats-list.component.scss',
})
export class ChatsListComponent {
  chatsServise = inject(ChatsServise);

  chats$ = this.chatsServise.getMyChats();
}
