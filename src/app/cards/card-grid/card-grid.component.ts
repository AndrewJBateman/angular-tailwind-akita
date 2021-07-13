import { Component, OnInit } from '@angular/core';

import TestCards from '../../test-data';
import { PostCard } from '../card.model';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css'],
})
export class CardGridComponent implements OnInit {
  testCards: PostCard[] = TestCards;
  constructor() {}

  ngOnInit(): void {
  }

  toggleModal() {
    console.log('toggled')
  }
}
