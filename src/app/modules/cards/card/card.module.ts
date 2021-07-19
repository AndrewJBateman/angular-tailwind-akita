import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';
import { CardItemModule } from "../card-item/card-item.module";
import { CardFooterComponent } from "../components/card-footer/card-footer.component";

@NgModule({
  declarations: [
    CardComponent,
    CardFooterComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    ReactiveFormsModule,
    CardItemModule
  ]
})
export class CardModule { }
