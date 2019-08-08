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
    @ViewChild(DxScrollViewComponent, {static: false}) scrollViewEl: ElementRef;
    @HostListener('window:resize', ['$event'])


    enduroJsData: any;
    updateContentTimer: any;
    content = '<div style="height: 48px;"></div>';
    LoadOptions: any = {};
    pageCount;
    closetParent;

    constructor(
        private host: ElementRef,
        private serviceBlog: BlogService
    ) {
        this.pageCount = 1;
    }


    ngAfterViewInit() {
        console.log('scrollViewEl: ', this.scrollViewEl);
        this.updateBottomContent(1);
        this.scrollView.instance.option('onReachBottom', this.updateBottomContent);
    }

    viewHeight(event) {
        console.log('event: ', event);
        return 1500;
    }

    updateContent = (e, eventName) => {
//        this.pageCount = Math.round(Math.random() * 10);
        this.serviceBlog.enduroJsonStore.load({skip: this.pageCount++})
        .then((updateContentText: string) => {
            if (this.updateContentTimer) {
                clearTimeout(this.updateContentTimer);
            }
            this.updateContentTimer = setTimeout(() => {
                this.content = (eventName === 'PullDown' ? updateContentText + this.content : this.content +  updateContentText);
                if (e !== 1) {
                    e.component.release();
                }
            }, 1);
        });
    }

    updateTopContent = (e) => {
        console.log('updateTopContent');
   //     this.updateContent(e, 'PullDown');
    }

    updateBottomContent = (e) => {
        this.updateContent(e, 'ReachBottom');
    }

    action(e): void {
//        this.scrollView.instance.scrollTop();
        this.scrollView.instance.scrollTo(0);
//        if (position >= 0) {
//            this.scrollView.instance.scrollTo(this.scrollView.instance.scrollHeight());
//        }
//        this.top.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
}

