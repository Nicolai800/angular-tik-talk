import { Component, input } from '@angular/core';
import { Message } from '../../../../data/interfaces/chats.interface';
import { AvaratCircleComponent } from '../../../../common-ui/avarat-circle/avarat-circle.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message',
  imports: [AvaratCircleComponent, CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  message = input.required<Message>();
}
