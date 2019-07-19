import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuard } from './_guards';


// General
// import { PageNotFoundComponent, LoginComponent, SignupComponent } from './general/';


import {
  BlogPageComponent,
  ContactPageComponent,
  ExplorePageComponent,
  GuestPageComponent,
  JobsPageComponent,
  RestaurantPageComponent,
  LoungePageComponent,
  HotelPageComponent,
  PhotoPageComponent
} from './pages/';

const routes: Routes = [
  {
    path: 'photo',
    component: PhotoPageComponent,
  },
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
//  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [  RouterModule.forRoot(routes,  { enableTracing: false })],
  exports: [RouterModule],
  declarations: [],
    providers: [],
})
export class AppRoutingModule { }
