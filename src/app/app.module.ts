import {
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
// import { IonicModule } from '@ionic/angular';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import {
  DxMultiViewModule,
  DxMapModule,
  DxNumberBoxModule,
  DxDataGridModule,
  DxSliderModule,
  DxDrawerModule,
  DxRadioGroupModule,
  DxListModule,
  DxToolbarModule,
  DxTreeViewModule,
  DxSchedulerModule,
  DxTemplateModule,
  DxButtonModule,
  DxHtmlEditorModule,
  DxPivotGridModule,
  DxChartModule,
  DxPopupModule,
  DxPopoverModule,
  DxVectorMapModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxFileUploaderModule,
  DxAccordionModule,
  DxCheckBoxModule,
  DxTagBoxModule,
  DxSlideOutModule,
  DxSwitchModule,
  DxBulletModule,
  DxTabPanelModule,
  DxDropDownBoxModule,
  DxActionSheetModule,
  DxFormModule,
  DxDateBoxModule,
  DxValidatorModule,
  DxValidationSummaryModule,
  DxButtonGroupModule,
  DxProgressBarModule,
  DxResponsiveBoxModule,
  DxGalleryModule,
  DxTileViewModule,
  DxTreeListModule,
  DxFilterBuilderModule,
  DxNavBarModule,
  DxBoxModule,
  DxScrollViewModule,
  DxSpeedDialActionModule,
  DxCalendarModule
} from 'devextreme-angular';


// Etc
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';


// Hospitality
import { BookingComponent } from './booking/booking.component';
import { FloorplanComponent } from './floorplan/floorplan.component';
import { InvoiceComponent } from './invoice/invoice.component';

// Resturant
import { GalleryComponent } from './gallery/gallery.component';

// HR
import { JobsComponent } from './jobs/jobs.component';

// Website
import { TeaseComponent } from './tease/tease.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { EventComponent } from './event/event.component';
import { BlogComponent } from './blog/blog.component';
import { SlidecontentComponent } from './slidecontent/slidecontent.component';
import { SlideshowComponent } from './slideshow/slideshow.component';


// Nav
import { TopnavComponent } from './topnav/topnav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';


// Utilities
import {SafeHtmlPipe} from './pipes/SafeHtmlPipe.pipe';
import {SafeStylePipe} from './pipes/SafeStylePipe.pipe';



@NgModule({
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
  //    IonicModule,
    DxMultiViewModule,
    DxCalendarModule,
    DxNumberBoxModule,
    DxCheckBoxModule,
    DxButtonGroupModule,
    DxFormModule,
    DxDrawerModule,
    DxRadioGroupModule,
    DxListModule,
    DxToolbarModule,
    DxHtmlEditorModule,
    DxTreeViewModule,
    DxDataGridModule,
    DxSliderModule,
    DxTreeListModule,
    DxSchedulerModule,
    DxTemplateModule,
    DxPivotGridModule,
    DxChartModule,
    DxButtonModule,
    DxPopupModule,
    DxPopoverModule,
    DxMapModule,
    DxVectorMapModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxFileUploaderModule,
    DxAccordionModule,
    DxCheckBoxModule,
    DxTagBoxModule,
    DxSlideOutModule,
    DxSwitchModule,
    DxBulletModule,
    DxDropDownBoxModule,
    DxTabPanelModule,
    DxActionSheetModule,
    DxDateBoxModule,
    DxValidatorModule,
    DxValidationSummaryModule,
    DxProgressBarModule,
    DxResponsiveBoxModule,
    DxGalleryModule,
    DxTileViewModule,
    DxTreeListModule,
    DxFilterBuilderModule,
    DxNavBarModule,
    DxBoxModule,
    DxScrollViewModule,
    DxSpeedDialActionModule,
//    IonicModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    AppComponent,
    VideoComponent,
    TopnavComponent,
    SidenavComponent,
    BookingComponent,
    JobsComponent,
    TeaseComponent,
    ContactComponent,
    MapComponent,
    EventComponent,
    GalleryComponent,
    SlideshowComponent,
    FloorplanComponent,
    BlogComponent,
    FooterComponent,
    SlidecontentComponent,
    InvoiceComponent,
    SafeHtmlPipe,
    SafeStylePipe
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
