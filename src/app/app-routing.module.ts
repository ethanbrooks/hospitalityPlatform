import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuard } from './_guards';


import {
  VideoComponent,
  MapComponent
} from './plugins/';

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
  { path: 'blog:page',
    component: BlogPageComponent,
  },
  {
    path: '',
    component: VideoComponent,
    outlet: 'top-content'
  },
  {
    path: '',
    component: BlogPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'contact',
    component: MapComponent,
    outlet: 'top-content'
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
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: false,
    anchorScrolling: 'enabled',
  })],
  providers: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
