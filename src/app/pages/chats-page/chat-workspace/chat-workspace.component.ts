import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MessagesWrapperComponent } from './messages-wrapper/messages-wrapper.component';

@Component({
  selector: 'app-chat-workspace',
  imports: [HeaderComponent, MessagesWrapperComponent],
  templateUrl: './chat-workspace.component.html',
  styleUrl: './chat-workspace.component.scss',
})
export class ChatWorkspaceComponent {}
