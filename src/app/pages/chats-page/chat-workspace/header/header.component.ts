import { Component, input } from '@angular/core';
import { Profile } from '../../../../data/interfaces/profile.interface';
import { AvaratCircleComponent } from '../../../../common-ui/avarat-circle/avarat-circle.component';

@Component({
  selector: 'app-header',
  imports: [AvaratCircleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  profile = input.required<Profile>();
}
