import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardGridRoutingModule } from './card-grid-routing.module';
import { CardGridComponent } from './card-grid.component';
import { CardItemComponent } from "../components/card-item/card-item.component";
import { SpinnerComponent } from "src/app/core/spinner/spinner.component";

@NgModule({
  declarations: [CardGridComponent, CardItemComponent, SpinnerComponent],
  imports: [CommonModule, CardGridRoutingModule],
  exports: []
})
export class CardGridModule {}
