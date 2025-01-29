import { Component, input } from '@angular/core';
import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';
import { Profile } from '../../data/interfaces/profile.interface';

@Component({
  selector: 'app-avarat-circle',
  imports: [ImgUrlPipe],
  templateUrl: './avarat-circle.component.html',
  styleUrl: './avarat-circle.component.scss',
})
export class AvaratCircleComponent {
  avatarUrl = input<string | null>();
}
