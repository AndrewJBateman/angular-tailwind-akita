import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardGridRoutingModule } from './card-grid-routing.module';
import { CardGridComponent } from './card-grid.component';
import { CardItemComponent } from "../card-item/card-item.component";

@NgModule({
  declarations: [CardGridComponent, CardItemComponent],
  imports: [CommonModule, CardGridRoutingModule],
  exports: []
})
export class CardGridModule {}
