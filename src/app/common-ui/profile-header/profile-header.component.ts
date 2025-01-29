import { Component, input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';
import { AvaratCircleComponent } from '../avarat-circle/avarat-circle.component';

@Component({
  selector: 'app-profile-header',
  imports: [ImgUrlPipe, AvaratCircleComponent],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss',
})
export class ProfileHeaderComponent {
  profile = input<Profile>();
}
