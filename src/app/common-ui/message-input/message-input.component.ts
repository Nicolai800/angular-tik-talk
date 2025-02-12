import {
  Component,
  EventEmitter,
  HostBinding,
  inject,
  input,
  Output,
  Renderer2,
} from '@angular/core';
import { AvaratCircleComponent } from '../avarat-circle/avarat-circle.component';
import { ProfileService } from '../../data/services/profile.service';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { PostService } from '../../data/services/post.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-message-input',
  imports: [AvaratCircleComponent, SvgIconComponent, FormsModule],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.scss',
})
export class MessageInputComponent {
  r2 = inject(Renderer2);
  me = inject(ProfileService).me;

  @Output() created = new EventEmitter<string>();

  postText = '';

  onTextAreaInput(event: Event) {
    const textArea = event.target as HTMLTextAreaElement;

    this.r2.setStyle(textArea, 'height', 'auto');
    this.r2.setStyle(textArea, 'height', textArea.scrollHeight + 'px');
  }

  onCreatePost() {
    if (!this.postText) return;

    this.created.emit(this.postText);
    this.postText = '';
  }
}
