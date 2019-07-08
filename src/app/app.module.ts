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
import { InvoiceComponent } from './invoice/invoice.component';

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
    InvoiceComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
