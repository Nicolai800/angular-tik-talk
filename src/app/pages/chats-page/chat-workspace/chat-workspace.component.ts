import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MessagesWrapperComponent } from './messages-wrapper/messages-wrapper.component';
import { ActivatedRoute } from '@angular/router';
import { ChatsServise } from '../../../data/services/chats.service';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-workspace',
  imports: [HeaderComponent, MessagesWrapperComponent, CommonModule],
  templateUrl: './chat-workspace.component.html',
  styleUrl: './chat-workspace.component.scss',
})
export class ChatWorkspaceComponent {
  route = inject(ActivatedRoute);
  chatsServise = inject(ChatsServise);

  activeChat$ = this.route.params.pipe(
    switchMap(({ id }) => this.chatsServise.getChatById(id))
  );
}
