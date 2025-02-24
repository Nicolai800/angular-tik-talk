import { Component, input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { AvaratCircleComponent } from '../avarat-circle/avarat-circle.component';

@Component({
  selector: 'app-profile-header',
  imports: [AvaratCircleComponent],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss',
})
export class ProfileHeaderComponent {
  profile = input<Profile>();
}
