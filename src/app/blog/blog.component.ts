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

    enduroJsData: any;

    updateContentTimer: any; 

    content: string;
    showScrollbarModes: any[];
  
    scrollbarMode: string;
    constructor (
        private serviceBlog: BlogService
    ) {}
    
    ngAfterViewInit() { 
        this.getEnduroJsDataLoad(); 
        this.scrollView.instance.option("onReachBottom", this.updateBottomContent);   
    }

    getEnduroJsDataLoad() : void { 
        this.serviceBlog.enduroJsonStore.load().then(
        (enduroJsDataLoad: string) => {
            this.content = enduroJsDataLoad;
        })
    }

    valueChanged = (data) => { 
        console.log('valueChanged'); 
        this.scrollView.instance.option("onReachBottom", data.value ? this.updateBottomContent : null); 
    } 
 
    updateBottomContent(e){ 
        this.serviceBlog.enduroJsonStore.byKey({ id: 1}).then(
            (enduroJsData: string) => {
                if(this.updateContentTimer)
                clearTimeout(this.updateContentTimer); 
                this.updateContentTimer = setTimeout(() => { 
                    this.content =  this.content + enduroJsData; 
                    e.component.release(); 
                }, 500); 
            })
        }        
}