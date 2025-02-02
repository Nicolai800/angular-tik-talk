import { Component, input } from '@angular/core';
import { Post } from '../../../data/interfaces/post.interface';
import { AvaratCircleComponent } from '../../../common-ui/avarat-circle/avarat-circle.component';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../../../common-ui/svg-icon/svg-icon.component';
import { PostInputComponent } from '../post-input/post-input.component';

@Component({
  selector: 'app-post',
  imports: [
    AvaratCircleComponent,
    CommonModule,
    SvgIconComponent,
    PostInputComponent,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  post = input<Post>();
}
