import { ID } from '@datorama/akita';

export interface Post {
  _id: ID;
  postImageUrl: string;
  title: string;
  description: string;
  category: string;
  // 'Checking' || 'Exercise' || 'Programming' || 'Travel' || 'Work' || 'Writing';
  authorImageUrl: string;
  authorName: string;
  date: string;
}

export function createPost(params: Partial<Post>) {
  return {} as Post;
}
