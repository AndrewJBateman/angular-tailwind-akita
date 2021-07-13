import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./cards/cards.module').then((mod) => mod.CardsModule),
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
