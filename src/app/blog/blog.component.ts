import { Component, ViewChild, AfterViewInit, Pipe,PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {  DxScrollViewModule, DxScrollViewComponent } from 'devextreme-angular';
import { HttpHandler, HttpClient } from '@angular/common/http';
import notify from 'devextreme/ui/notify';
import { Observable } from 'rxjs';
import { BlogService } from './blog.service';

@Component({
    selector: 'app-blog',
    providers: [ BlogService, HttpClient ],
    templateUrl: './blog.component.html',
    styleUrls: [
        './blog.component.css'
    ]
})
export class BlogComponent implements AfterViewInit {
    @ViewChild(DxScrollViewComponent) scrollView: DxScrollViewComponent;     

    enduroJsData$: Observable<string> = null;

    showScrollbarModes: any[];
    content: string;

    scrollbarMode: string;
    constructor (
        private serviceBlog: BlogService
    ) {}
    
    ngAfterViewInit() { 
        this.enduroJsData$ =  this.serviceBlog.enduroJsData$;
        this.getEnduroJsData(); 
        this.scrollView.instance.option("onReachBottom", this.updateBottomContent);   
    }

    valueChanged = (data) => {
        console.log('valueChanged');
        this.scrollView.instance.option("onReachBottom", data.value ? this.updateBottomContent : null);
    }
   
    getEnduroJsData() : void { 
        this.serviceBlog.enduroJsonStore.byKey({ }); 
//        this.serviceBlog.enduroJsonStore.load({ });
    }

    updateTopContent($event){
        console.log(this.enduroJsData$);
        this.serviceBlog.updateContent($event, "ReachTop");
    }
    updateBottomContent($event){
        console.log(this.enduroJsData$);
        this.serviceBlog.updateContent($event, "ReachBottom");
    }
}