import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComment } from '../../../../data/interfaces/post.interface';
import { AvaratCircleComponent } from '../../../../common-ui/avarat-circle/avarat-circle.component';

@Component({
  selector: 'app-comment',
  imports: [AvaratCircleComponent, CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  comment = input<PostComment>();
}
