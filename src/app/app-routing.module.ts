import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./cards/cards.module').then((mod) => mod.CardsModule),
  },
  {
    path: 'card-add',
    loadChildren: () =>
      import('./cards/card-add/card-add.module').then((mod) => mod.CardAddModule),
  },
  {
    path: 'card/:id',
    loadChildren: () =>
      import('./cards/card/card.module').then((mod) => mod.CardModule),
  },
  // {
  //   path: "**",
  //   loadChildren: () =>
  //     import("./modules/pagenotfound/pagenotfound.module").then(
  //       (mod) => mod.PageNotFoundModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
