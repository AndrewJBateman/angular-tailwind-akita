import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { PostsQuery } from '../../state/posts.query';
import { PostsService } from '../../state/posts.service';
import { PostsStore } from '../../state/posts.store';

@UntilDestroy()
@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
})
export class CardGridComponent implements OnInit {
  constructor(
    private postService: PostsService,
    private postQuery: PostsQuery,
    private postStore: PostsStore
  ) {}

  public posts$ = this.postQuery.selectAll();
  public loading$ = this.postQuery.selectLoading();
  ngOnInit(): void {
    this.postService
      .connect()
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        console.log('this: ', this);
      });
  }

  toggleModal() {
    console.log('toggled');
  }
}
