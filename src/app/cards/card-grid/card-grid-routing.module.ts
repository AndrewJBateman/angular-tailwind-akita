import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardGridComponent } from "./card-grid.component";

const routes: Routes = [
  {
    path: '', component: CardGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardGridRoutingModule { }
