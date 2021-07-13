export class PostCard {
  _id: string = '';
  postImageUrl: string = '';
  title: string = '';
  description: string = '';
  category: string = 'Checking' || 'Exercise' || 'Programming' || 'Travel' || 'Work' || 'Writing';
  authorImageUrl: string = '';
  authorName: string = '';
  date: string = '';
}

export enum CardState {
  FAVOURITE = 'favourite',
}
