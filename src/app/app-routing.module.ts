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
      import('./cards/card-add/card-add.module').then(
        (mod) => mod.CardAddModule
      ),
  },
  {
    path: 'card/:id',
    loadChildren: () =>
      import('./cards/card/card.module').then((mod) => mod.CardModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./core/about/about.module').then((mod) => mod.AboutModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./core/contact/contact.module').then((mod) => mod.ContactModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./core/not-found/not-found.module').then(
        (mod) => mod.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
