import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    ReactiveFormsModule
  ]
})
export class CardModule { }
