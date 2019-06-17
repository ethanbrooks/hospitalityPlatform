import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';

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
  DxGalleryModule,
  DxTileViewModule,
  DxTreeListModule,
  DxFilterBuilderModule,
  DxNavBarModule,
  DxBoxModule,
  DxScrollViewModule,
  DxSpeedDialActionModule
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
import { EventComponent } from './event/event.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FloorplanComponent } from './floorplan/floorplan.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';


import {SafeHtmlPipe} from "./pipes/SafeHtmlPipe.pipe";



@NgModule({  
  imports: [
    HttpClientModule,
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
    DxGalleryModule,
    DxTileViewModule,
    DxTreeListModule,
    DxFilterBuilderModule,
    DxNavBarModule,
    DxBoxModule, 
    DxScrollViewModule,
    DxSpeedDialActionModule
  ],
  declarations: [ 
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
    SafeHtmlPipe 
  ],
  exports:[
    SafeHtmlPipe
  ],
  entryComponents: [ 
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
    FooterComponent 
  ]
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

    const EventElement = createCustomElement(EventComponent, { injector: this.injector });
    customElements.define('app-event', EventElement);

    const GalleryElement = createCustomElement(GalleryComponent, { injector: this.injector });
    customElements.define('app-gallery', GalleryElement);

    const FloorplanElement = createCustomElement(FloorplanComponent, { injector: this.injector });
    customElements.define('app-floorplan', FloorplanElement);

    const SlideshowElement = createCustomElement(SlideshowComponent, { injector: this.injector });
    customElements.define('app-slideshow', SlideshowElement);

    const BlogElement = createCustomElement(BlogComponent, { injector: this.injector });
    customElements.define('app-blog', BlogElement);

    const FooterElement = createCustomElement(FooterComponent, { injector: this.injector });
    customElements.define('app-footer', FooterElement);
    
  }
}