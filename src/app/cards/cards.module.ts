import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from './card-item/card-item.component';
import { CardGridComponent } from './card-grid/card-grid.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CardGridComponent,
  },
  {
    path: 'detail',
    component: CardItemComponent,
  },
];

@NgModule({
  declarations: [CardItemComponent, CardGridComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [CardItemComponent],
})
export class CardsModule {}
