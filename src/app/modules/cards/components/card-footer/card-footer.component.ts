import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html'
})
export class CardFooterComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  onReturnToCardGrid(): void {
    this.location.back();
  }

}
