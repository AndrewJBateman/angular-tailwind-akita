import { Component, Input, OnInit } from '@angular/core';
import { PostCard } from 'src/app/cards/card.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent implements OnInit {
  @Input()
  data!: PostCard;
  constructor() {}

  ngOnInit(): void {}
}
