import { Component, signal } from '@angular/core';
import { DndDirective } from '../../../common-ui/directives/dnd.directive';

@Component({
  selector: 'app-avatar-upload',
  imports: [DndDirective],
  templateUrl: './avatar-upload.component.html',
  styleUrl: './avatar-upload.component.scss',
})
export class AvatarUploadComponent {
  prewiew = signal<string>('/assets/images/noAvatar.png');

  fileBrowserHandler(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];

    if (!file || !file.type.match('image')) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      this.prewiew.set(event.target?.result?.toString() ?? '');
    };
    reader.readAsDataURL(file);
  }
}
