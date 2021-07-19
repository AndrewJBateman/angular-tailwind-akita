import { Component, Input, OnInit } from '@angular/core';
import { Post } from "../../../state/post.model";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html'
})
export class CardItemComponent implements OnInit {
  @Input()
  data!: Post;

  @Input()
  gridView: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
