import {
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
// import { IonicModule } from '@ionic/angular';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, '/assets/i18n/', '.json');
}

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
import { UppyModule } from './features/uppy/uppy.module';
import { ToastrModule } from 'ngx-toastr';


import { environment } from '../environments/environment';
import { AppComponent } from './app.component';


import {
  TagsComponent,
//  UppyComponent,
  FiltersComponent
} from './features/';

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
  LanguageComponent,
  FooterComponent,
  PhotoComponent,
  UploadComponent
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
  PhotoPageComponent
} from './pages/';


// Utilities

import { SafeStylePipe } from './pipes/SafeStylePipe.pipe';
import { SafeHtmlPipe } from './pipes/SafeHtmlPipe.pipe';
import { TimePipe } from './pipes/TimePipe.pipe';


@NgModule({
  imports: [
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    //    useClass: CustomLoader
      },
// https://www.npmjs.com/package/@ngx-translate/core
//      compiler: {provide: TranslateCompiler, useClass: CustomCompiler},
//      parser: {provide: TranslateParser, useClass: CustomParser},
//      missingTranslationHandler: {provide: MissingTranslationHandler, useClass: CustomHandler},
//      isolate: true,
    }),
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
    HttpClientModule,

    UppyModule,

    ToastrModule.forRoot(), BrowserAnimationsModule,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
//    ServiceWorkerModule.register('@uppy/golden-retriever/lib/ServiceWorker', { enabled: environment.production })


//    IonicModule,
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
    PhotoPageComponent,

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
    LanguageComponent,
    PhotoComponent,
    UploadComponent,

    TagsComponent,
    FiltersComponent,

    TimePipe,
    SafeHtmlPipe,
    SafeStylePipe
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
