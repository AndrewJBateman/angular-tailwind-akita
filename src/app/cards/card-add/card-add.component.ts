import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../../state/post.model';
import { PostsService } from '../../state/posts.service';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html'
})
export class CardAddComponent implements OnInit {
  constructor(private router: Router, private postsService: PostsService) {}

  public postForm = new FormGroup({
    postImageUrl: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    authorName: new FormControl('', Validators.required),
    authorImageUrl: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  });

  public async addPost(formData: Post) {
    await this.postsService.add(formData);
    this.router.navigate(['/']);
  }

  ngOnInit(): void {}
}
