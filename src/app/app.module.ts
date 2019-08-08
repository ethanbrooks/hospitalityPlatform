// import { NgtUniversalModule } from '@ng-toolkit/universal';
import {
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
// import { IonicModule } from '@ionic/angular';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Utilities
import { ScreenService } from './_services';
import { SafeStylePipe, SafeHtmlPipe, TimePipe } from './_pipes/';


import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, '/assets/i18n/', '.json');
}

import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';


import { DxMultiViewModule } from 'devextreme-angular/ui/multi-view';

//  DxServerTransferStateModule,
import {  DxMapModule } from 'devextreme-angular/ui/map';
// import { DxSwitchModule } from 'devextreme-angular/ui/switch';
import { DxGalleryModule } from 'devextreme-angular/ui/gallery';
import { DxBoxModule } from 'devextreme-angular/ui/box';
import { DxCalendarModule } from 'devextreme-angular/ui/calendar';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxDrawerModule } from 'devextreme-angular/ui/drawer';

// import { DxSliderModule } from 'devextreme-angular/ui/slider';
// import { DxListModule } from 'devextreme-angular/ui/list';
// import { DxAccordionModule } from 'devextreme-angular/ui/accordion';
import { DxSchedulerModule } from 'devextreme-angular/ui/scheduler';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';

import { DxValidatorModule } from 'devextreme-angular/ui/validator';
import { DxPopoverModule } from 'devextreme-angular/ui/popover';
import { DxPopupModule } from 'devextreme-angular/ui/popup';
import { DxButtonModule } from 'devextreme-angular/ui/button';
// import { DxBulletModule } from 'devextreme-angular/ui/bullet';
import { DxNumberBoxModule } from 'devextreme-angular/ui/number-box';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxRadioGroupModule } from 'devextreme-angular/ui/radio-group';
// import { DxTreeViewModule } from 'devextreme-angular/ui/tree-view';
import { DxHtmlEditorModule } from 'devextreme-angular/ui/html-editor';
// import { DxPivotGridModule } from 'devextreme-angular/ui/pivot-grid';
// import { DxChartModule } from 'devextreme-angular/ui/chart';
// import { DxVectorMapModule } from 'devextreme-angular/ui/vector-map';
import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';

import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
// import { DxFileUploaderModule } from 'devextreme-angular/ui/file-uploader';
// import { DxTagBoxModule } from 'devextreme-angular/ui/tag-box';
// import { DxSlideOutModule } from 'devextreme-angular/ui/slide-out';
import { DxTabPanelModule } from 'devextreme-angular/ui/tab-panel';
import { DxDropDownBoxModule } from 'devextreme-angular/ui/drop-down-box';
// import { DxActionSheetModule } from 'devextreme-angular/ui/action-sheet';
import { DxDateBoxModule } from 'devextreme-angular/ui/date-box';
// import { DxValidationSummaryModule } from 'devextreme-angular/ui/validation-summary';
// import { DxButtonGroupModule } from 'devextreme-angular/ui/button-group';
// import { DxProgressBarModule } from 'devextreme-angular/ui/progress-bar';
import { DxResponsiveBoxModule } from 'devextreme-angular/ui/responsive-box';
// TODO: for prerender
import { DxTileViewModule } from 'devextreme-angular/ui/tile-view';
// import { DxTreeListModule } from 'devextreme-angular/ui/tree-list';
import { DxFilterBuilderModule } from 'devextreme-angular/ui/filter-builder';
import { DxNavBarModule } from 'devextreme-angular/ui/nav-bar';
import { DxScrollViewModule } from 'devextreme-angular/ui/scroll-view';
import { DxSpeedDialActionModule } from 'devextreme-angular/ui/speed-dial-action';
import { DxCheckBoxModule } from 'devextreme-angular/ui/check-box';

import { UppyModule } from './features/uppy/uppy.module';

import { AppComponent } from './app.component';

import {
//  TagsComponent,
//  UppyComponent,
//  FiltersComponent
} from './features/';

import {
  VideoComponent,
  BookingComponent,
  FloorplanComponent,
  InvoiceComponent,
  GalleryComponent,
  JobsComponent,
//  TeaseComponent,
  ContactComponent,
  MapComponent,
  EventComponent,
  BlogComponent,
  SlidecontentComponent,
  SlideshowComponent,
  TopnavComponent,
//  SidenavComponent,
  LanguageComponent,
  FooterComponent,
  PhotoComponent,
//  UploadComponent,
  FilterComponent
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




@NgModule({
  imports: [
//    DxServerTransferStateModule,
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
    DxHtmlEditorModule,
    DxDataGridModule,
    DxButtonModule,
    DxPopupModule,
    DxPopoverModule,
    DxMapModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxRadioGroupModule,
    DxFormModule,
    DxCheckBoxModule,
    DxDropDownBoxModule,
    DxDateBoxModule,
    DxValidatorModule,
    DxResponsiveBoxModule,
    DxGalleryModule,
    DxTileViewModule,
    DxFilterBuilderModule,
    DxNavBarModule,
    DxBoxModule,
    DxScrollViewModule,
    DxSpeedDialActionModule,
    DxToolbarModule,
    DxTabPanelModule,
    DxSchedulerModule,
    DxDrawerModule,

//    DxButtonGroupModule,

//    DxListModule,
//    DxTreeViewModule,
//    DxSliderModule,
//    DxTreeListModule,
//    DxTemplateModule,
//    DxPivotGridModule,
//    DxChartModule,
//    DxVectorMapModule,
//    DxFileUploaderModule,
//    DxAccordionModule,
//    DxTagBoxModule,
//    DxSlideOutModule,
//    DxSwitchModule,
//    DxBulletModule,
//    DxActionSheetModule,
//    DxValidationSummaryModule,
//    DxProgressBarModule,
//    DxTreeListModule,
    HttpClientModule,
    UppyModule,
     ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
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
    CellarPageComponent,
    PhotoPageComponent,
    FilterPageComponent,

    VideoComponent,
    TopnavComponent,
//    SidenavComponent,
    BookingComponent,
    JobsComponent,
//    TeaseComponent,
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
//    UploadComponent,
    FilterComponent,

//    TagsComponent,
//    FiltersComponent,

    TimePipe,
    SafeHtmlPipe,
    SafeStylePipe
  ],
  providers: [ScreenService],
  bootstrap: [AppComponent],
})

export class AppModule {}
