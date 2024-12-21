import { Component, effect, inject } from '@angular/core';
import { ProfileHeaderComponent } from '../../common-ui/profile-header/profile-header.component';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../../data/services/profile.service';
import { firstValueFrom } from 'rxjs';
import { AvatarUploadComponent } from './avatar-upload/avatar-upload.component';

@Component({
  selector: 'app-settings-page',
  imports: [ProfileHeaderComponent, ReactiveFormsModule, AvatarUploadComponent],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss',
})
export class SettingsPageComponent {
  fb = inject(FormBuilder);
  profileService = inject(ProfileService);

  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: [{ value: '', disabled: true }, Validators.required],
    description: [''],
    stack: [],
  });

  constructor() {
    effect(() => {
      //@ts-ignore
      this.form.patchValue(this.profileService.me());
    });
  }

  onSave() {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();

    if (this.form.invalid) return;

    //@ts-ignore
    firstValueFrom(this.profileService.patchProfile(this.form.value));
  }

  splitStack(stack: string | null | string[]) {
    if (!stack) return [];
    if (Array.isArray(stack)) return stack;
    return stack.split(',');
  }

  mergeStack(stack: string | null | string[]) {
    if (!stack) return '';
    if (Array.isArray(stack)) return stack.join(',');
    return stack.split(',');
  }
}
