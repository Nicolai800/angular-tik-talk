import { Component, inject } from '@angular/core';
import { ProfileHeaderComponent } from '../../common-ui/profile-header/profile-header.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-page',
  imports: [ProfileHeaderComponent],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss',
})
export class SettingsPageComponent {
  fb = inject(FormBuilder);

  form = this.fb.group({
    firstName: ['', Validators.required],
    lasttName: ['', Validators.required],
    userName: ['', Validators.required],
    description: [''],
    stack: [''],
  });
}
