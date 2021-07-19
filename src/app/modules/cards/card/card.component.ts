import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../../../state/post.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  post: Post;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (
        this.router.getCurrentNavigation()?.extras.state &&
        this.router.getCurrentNavigation()?.extras.state != undefined
      ) {
        this.post = this.router.getCurrentNavigation()?.extras.state?.post;
      }
    });
  }

  returnToGrid(): void {
    this.location.back();
  }
}
