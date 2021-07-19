import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./card-grid/card-grid.module').then((mod) => mod.CardGridModule),
  },
];

@NgModule({
  declarations: [
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
})
export class CardsModule {}
