import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CardAddRoutingModule } from './card-add-routing.module';
import { CardAddComponent } from "./card-add.component";


@NgModule({
  declarations: [CardAddComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardAddRoutingModule
  ]
})
export class CardAddModule { }
