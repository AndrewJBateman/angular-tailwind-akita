import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardGridRoutingModule } from './card-grid-routing.module';
import { CardGridComponent } from './card-grid.component';
import { CardItemModule } from "../card-item/card-item.module";
import { SpinnerComponent } from "src/app/core/spinner/spinner.component";

@NgModule({
  declarations: [CardGridComponent, SpinnerComponent],
  imports: [CommonModule, CardGridRoutingModule, CardItemModule],
  exports: []
})
export class CardGridModule {}
