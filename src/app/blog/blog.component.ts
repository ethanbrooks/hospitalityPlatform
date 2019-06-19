import { Component, ViewChild, AfterViewInit, Pipe,PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {  DxScrollViewModule, DxScrollViewComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { BlogService } from './blog.service';

@Component({
    selector: 'app-blog',
    providers: [ BlogService ],
    templateUrl: './blog.component.html',
    styleUrls: [
        './blog.component.css'
    ]
})
export class BlogComponent implements AfterViewInit {
    @ViewChild(DxScrollViewComponent) scrollView: DxScrollViewComponent;     
    updateContentTimer: any; 
    content: string = '';

    constructor (
        private serviceBlog: BlogService
    ) {}
    
    ngAfterViewInit(){ 
        this.getEnduroJsDataLoad(); 
        this.scrollView.instance.option("onReachBottom", this.updateBottomContent);   
    }

    getEnduroJsDataLoad():void{ 
        this.serviceBlog.enduroJsonStore.load().then(
        (enduroJsDataLoad: string) => {
            this.content = enduroJsDataLoad;
        });
    }
    
    updateTopContent(e){ 
        this.serviceBlog.enduroJsonStore.load().then((enduroJsData: string) => {
    ////        this.serviceBlog.enduroJsonStore.byKey({ id: 1}).then(
            if(this.updateContentTimer)clearTimeout(this.updateContentTimer); 
            this.updateContentTimer = setTimeout(() => { 
                this.content =  enduroJsData + this.content; 
                e.component.release(); 
            }, 1); 
        });
    }  

    updateBottomContent(e){ 
        this.serviceBlog.enduroJsonStore.load().then((enduroJsData: string) => {
////        this.serviceBlog.enduroJsonStore.byKey({ id: 1}).then(
            if(this.updateContentTimer)clearTimeout(this.updateContentTimer); 
            this.updateContentTimer = setTimeout(() => { 
                this.content =  this.content + enduroJsData; 
                e.component.release(); 
            }, 1); 
        });
    }        
}