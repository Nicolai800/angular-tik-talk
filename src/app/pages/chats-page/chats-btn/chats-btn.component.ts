import { Component, input } from '@angular/core';
import { AvaratCircleComponent } from '../../../common-ui/avarat-circle/avarat-circle.component';
import { Chat, LastMessageRes } from '../../../data/interfaces/chats.interface';

@Component({
  selector: 'button[chats]',
  imports: [AvaratCircleComponent],
  templateUrl: './chats-btn.component.html',
  styleUrl: './chats-btn.component.scss',
})
export class ChatsBtnComponent {
  chat = input<LastMessageRes>();
}
