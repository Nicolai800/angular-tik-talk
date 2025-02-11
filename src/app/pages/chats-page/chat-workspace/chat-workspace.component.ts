import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MessagesWrapperComponent } from './messages-wrapper/messages-wrapper.component';
import { MessageInputComponent } from '../../../common-ui/message-input/message-input.component';

@Component({
  selector: 'app-chat-workspace',
  imports: [HeaderComponent, MessagesWrapperComponent, MessageInputComponent],
  templateUrl: './chat-workspace.component.html',
  styleUrl: './chat-workspace.component.scss',
})
export class ChatWorkspaceComponent {}
