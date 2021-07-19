import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardAddComponent } from "./card-add.component";

const routes: Routes = [
  { path: '', component: CardAddComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardAddRoutingModule { }
