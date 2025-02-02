import { Component, input } from '@angular/core';
import { Post } from '../../../data/interfaces/post.interface';
import { AvaratCircleComponent } from '../../../common-ui/avarat-circle/avarat-circle.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [AvaratCircleComponent, CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  post = input<Post>();
}
