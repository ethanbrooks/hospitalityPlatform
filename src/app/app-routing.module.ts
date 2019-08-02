import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuard } from './_guards';

import {
  BlogPageComponent,
  ContactPageComponent,
  ExplorePageComponent,
  GuestPageComponent,
  JobsPageComponent,
  RestaurantPageComponent,
  LoungePageComponent,
  HotelPageComponent,
  CellarPageComponent,
  PhotoPageComponent,
  FilterPageComponent
} from './pages/';

// General
// import { PageNotFoundComponent, LoginComponent, SignupComponent } from './general/';

const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'blog:page',
    component: BlogPageComponent
  },
  {
    path: 'blog',
    component: BlogPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'explore',
    component: ExplorePageComponent,
  },
  {
    path: 'guest',
    component: GuestPageComponent,
  },
  {
    path: 'jobs',
    component: JobsPageComponent,
  },
  {
    path: 'the-restaurant',
    component: RestaurantPageComponent,
  },
  {
    path: 'the-lounge',
    component: LoungePageComponent,
  },
  {
    path: 'the-hotel',
    component: HotelPageComponent,
  },
  {
    path: 'the-cellar',
    component: CellarPageComponent,
  },
  {
    path: 'photo',
    component: PhotoPageComponent,
  },
  {
    path: 'filter',
    component: FilterPageComponent,
  }
  //  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
