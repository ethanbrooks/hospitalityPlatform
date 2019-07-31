import { Component, ViewChild, HostListener, AfterViewInit, ElementRef } from '@angular/core';
import {  DxScrollViewComponent } from 'devextreme-angular';
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
    @ViewChild(DxScrollViewComponent, {static: false}) scrollView: DxScrollViewComponent;
    @HostListener('window:resize', ['$event'])
    enduroJsData: any;
    updateContentTimer: any;
    content: any = '';
    constructor(
        private host: ElementRef,
        private serviceBlog: BlogService
    ) {}

    onResize(event) {
        console.log(event);
        return window.innerWidth;
    }

    ngAfterViewInit() {
        const closetParent = this.host.nativeElement.parentNode.parentNode;
        console.log(closetParent.offsetHeight);

        this.getEnduroJsDataLoad();
        this.scrollView.instance.option('onReachBottom', this.updateBottomContent);

    }

    getEnduroJsDataLoad(): void {
        this.serviceBlog.enduroJsonStore.load().then(
        (enduroJsDataLoad: string) => {
            this.content = enduroJsDataLoad;
        });
    }

    updateTopContent(e) {
        this.serviceBlog.enduroJsonStore.load().then((enduroJsData: string) => {
    ////        this.serviceBlog.enduroJsonStore.byKey({ id: 1}).then(
            if (this.updateContentTimer) {clearTimeout(this.updateContentTimer); }
            this.updateContentTimer = setTimeout(() => {
                this.content =  enduroJsData + this.content;
                e.component.release();
            }, 1);
        });
    }

    updateBottomContent(e) {
        this.serviceBlog.enduroJsonStore.load().then((enduroJsData: string) => {
////        this.serviceBlog.enduroJsonStore.byKey({ id: 1}).then(
            if (this.updateContentTimer) {clearTimeout(this.updateContentTimer); }
            this.updateContentTimer = setTimeout(() => {
                this.content =  this.content + enduroJsData;
                e.component.release();
            }, 1);
        });
    }
}
