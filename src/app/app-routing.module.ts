import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuard } from './_guards';


// General
// import { PageNotFoundComponent, LoginComponent, SignupComponent } from './general/';


// Admin
import { VideoComponent } from './video/video.component';
import { InvoiceComponent } from './invoice/invoice.component';


const routes: Routes = [
  { path: '',   redirectTo: 'invoice', pathMatch: 'full' },
  {
    path: 'invoice',
    component: InvoiceComponent,
//    canActivate: [AuthGuard]
  },
  {
    path: 'video',
    component: VideoComponent,
//    canActivate: [AuthGuard]
  },
//  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [  RouterModule.forRoot(routes,  { enableTracing: true })],
  exports: [RouterModule],
  declarations: [],
    providers: [],
})
export class AppRoutingModule { }
