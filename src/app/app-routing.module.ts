import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'upcoming-event',
    loadChildren: () =>
      import('./upcoming-event/upcoming-event.module').then(
        (m) => m.UpcomingEventModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'event-detail',
    loadChildren: () =>
      import('./event-detail/event-detail.module').then(
        (m) => m.EventDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
