import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { environment } from '../environments/environment';

import { 
  DxMapModule,
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
  DxScrollViewModule,
  DxGalleryModule,
  DxTileViewModule,
  DxTreeListModule,
  DxFilterBuilderModule,
  DxNavBarModule
} from 'devextreme-angular';


//Admin
import { VideoComponent } from './video/video.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BookingComponent } from './booking/booking.component';
import { JobsComponent } from './jobs/jobs.component';
import { TeaseComponent } from './tease/tease.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';



@NgModule({  
  imports: [
  BrowserModule,
  BrowserAnimationsModule,
  CommonModule,
//    IonicModule,
  DxMapModule,
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
  DxScrollViewModule,
  DxGalleryModule,
  DxTileViewModule,
  DxTreeListModule,
  DxFilterBuilderModule,
  DxNavBarModule
],
  declarations: [ VideoComponent, TopnavComponent, SidenavComponent , BookingComponent, JobsComponent, TeaseComponent, ContactComponent, MapComponent],
  entryComponents:    [ VideoComponent, TopnavComponent, SidenavComponent , BookingComponent, JobsComponent, TeaseComponent, ContactComponent, MapComponent ]
})

export class PluginModule {
  constructor(private injector:Injector){}
  ngDoBootstrap(){

    const VideoElement = createCustomElement(VideoComponent, { injector: this.injector });
    customElements.define('app-video', VideoElement);
    
    const TopnavElement = createCustomElement(TopnavComponent, { injector: this.injector });
    customElements.define('app-topnav', TopnavElement);

    const SidenavElement = createCustomElement(SidenavComponent, { injector: this.injector });
    customElements.define('app-sidenav', SidenavElement);

    const BookingElement = createCustomElement(BookingComponent, { injector: this.injector });
    customElements.define('app-booking', BookingElement);

    const JobsElement = createCustomElement(JobsComponent, { injector: this.injector });
    customElements.define('app-jobs', JobsElement);

    const TeaseElement = createCustomElement(TeaseComponent, { injector: this.injector });
    customElements.define('app-tease', TeaseElement);

    const ContactElement = createCustomElement(ContactComponent, { injector: this.injector });
    customElements.define('app-contact', ContactElement);

    const MapElement = createCustomElement(MapComponent, { injector: this.injector });
    customElements.define('app-map', MapElement);
  }
}