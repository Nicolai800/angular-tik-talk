import { Component, inject, Renderer2 } from '@angular/core';
import { AvaratCircleComponent } from '../../../common-ui/avarat-circle/avarat-circle.component';
import { ProfileService } from '../../../data/services/profile.service';

@Component({
  selector: 'app-post-input',
  imports: [AvaratCircleComponent],
  templateUrl: './post-input.component.html',
  styleUrl: './post-input.component.scss',
})
export class PostInputComponent {
  profile = inject(ProfileService).me;
  r2 = inject(Renderer2);

  onTextAreaInput(event: Event) {
    const textArea = event.target as HTMLTextAreaElement;
    this.r2.setStyle(textArea, 'height', 'auto');
    this.r2.setStyle(textArea, 'height', textArea.scrollHeight + 'px');
  }
}
