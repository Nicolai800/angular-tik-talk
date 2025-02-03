import { Component, inject, input, signal } from '@angular/core';
import { Comment, Post } from '../../../data/interfaces/post.interface';
import { AvaratCircleComponent } from '../../../common-ui/avarat-circle/avarat-circle.component';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../../../common-ui/svg-icon/svg-icon.component';
import { PostInputComponent } from '../post-input/post-input.component';
import { CommentComponent } from './comment/comment.component';
import { PostService } from '../../../data/services/post.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-post',
  imports: [
    AvaratCircleComponent,
    CommonModule,
    SvgIconComponent,
    PostInputComponent,
    CommentComponent,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  post = input<Post>();
  comment = signal<Comment[]>([]);
  postService = inject(PostService);

  async ngOnInt() {
    const comments = await firstValueFrom(
      this.postService.getCommentsByPostId(this.post()!.id)
    );
    this.comment.set(comments);
  }
}
