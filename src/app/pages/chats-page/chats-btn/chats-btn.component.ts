import { Component } from '@angular/core';
import { AvaratCircleComponent } from '../../../common-ui/avarat-circle/avarat-circle.component';

@Component({
  selector: 'button[chats]',
  imports: [AvaratCircleComponent],
  templateUrl: './chats-btn.component.html',
  styleUrl: './chats-btn.component.scss',
})
export class ChatsBtnComponent {}
