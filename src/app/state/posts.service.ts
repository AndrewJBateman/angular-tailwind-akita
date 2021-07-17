import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Post } from './post.model';
import { PostsStore } from './posts.store';

import { Observable, BehaviorSubject } from 'rxjs';
import { syncCollection } from '../libs/syncCollection';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { PostsQuery } from './posts.query';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(
    private postsStore: PostsStore,
    private http: HttpClient,
    private firestore: AngularFirestore,
    private storage: AngularFireStorage,
    private postsQuery: PostsQuery
  ) {}

  private collection = this.firestore.collection('posts');

  public connect() {
    return syncCollection(this.collection, this.postsStore);
  }
  get() {
    return this.http.get<Post[]>('https://api.com').pipe(
      tap((entities) => {
        this.postsStore.set(entities);
      })
    );
  }

  public async add(post: Post) {
    let newpost = {
      postImageUrl: post['postImageUrl'],
      category: post['category'],
      title: post['title'],
      description: post['description'],
      authorName: post['authorName'],
      authorImageUrl: post['authorImageUrl'],
      date: post['date'],
    };

    let p = await this.firestore.collection('posts').add(newpost);
    console.log(p.path);

    this.postsStore.add(post);
  }

  update(id: ID, post: Partial<Post>) {
    this.postsStore.update(id, post);
  }

  remove(id: ID) {
    this.postsStore.remove(id);
  }
}
