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


import {
  VideoComponent,
  BookingComponent,
  FloorplanComponent,
  InvoiceComponent,
  GalleryComponent,
  JobsComponent,
  TeaseComponent,
  ContactComponent,
  MapComponent,
  EventComponent,
  BlogComponent,
  SlidecontentComponent,
  SlideshowComponent,
  TopnavComponent,
  SidenavComponent,
  FooterComponent
  } from './plugins/';

import {
    BlogPageComponent,
    ContactPageComponent,
    ExplorePageComponent,
    GuestPageComponent,
    JobsPageComponent,
    RestaurantPageComponent,
    LoungePageComponent,
    HotelPageComponent
  } from './pages/';


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

    BlogPageComponent,
    ContactPageComponent,
    ExplorePageComponent,
    GuestPageComponent,
    JobsPageComponent,
    RestaurantPageComponent,
    LoungePageComponent,
    HotelPageComponent,

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
