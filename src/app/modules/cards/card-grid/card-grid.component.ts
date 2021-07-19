import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Router, NavigationExtras } from '@angular/router';

import { PostsQuery } from '../../../state/posts.query';
import { PostsService } from '../../../state/posts.service';
import { PostsStore } from '../../../state/posts.store';
import { Post } from '../../../state/post.model';

@UntilDestroy()
@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
})
export class CardGridComponent implements OnInit {
  constructor(
    private postService: PostsService,
    private postQuery: PostsQuery,
    private postStore: PostsStore,
    private router: Router
  ) {}

  public posts$ = this.postQuery.selectAll();
  public loading$ = this.postQuery.selectLoading();
  ngOnInit(): void {
    this.postService
      .connect()
      .pipe(untilDestroyed(this))
      .subscribe(() => {});
  }

  onGoToCardDetail(post: Post): void {
    console.log('this: ', this);
    const navigationExtras: NavigationExtras = {
      state: {
        post,
      },
    };
    this.router.navigate(['/card-detail'], navigationExtras);
  }
}
