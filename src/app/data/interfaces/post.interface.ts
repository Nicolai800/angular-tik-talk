import { Profile } from './profile.interface';

export interface PostCreateDto {
  title: string;
  content: string;
  authorId: number;
}

export interface Post {
  id: number;
  title: string;
  communityId: number;
  content: string;
  author: Profile;
  images: string[];
  createdAt: string;
  updatedAt: string;
  likes: 0;
  comments: Comment[];
}

export interface Comment {
  id: number;
  text: string;
  author: {
    id: 0;
    username: string;
    avatarUrl: string;
    subscribersAmount: 0;
  };
  postId: number;
  commentId: number;
  createdAt: string;
  updatedAt: string;
}
