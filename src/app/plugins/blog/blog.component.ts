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
    @ViewChild('top', {static: false}) top: ElementRef;
    @HostListener('window:resize', ['$event'])
    enduroJsData: any;
    updateContentTimer: any;
    content = '<div #top>Top</div>';
    LoadOptions: any = {};
    pageCount;

    constructor(
        private host: ElementRef,
        private serviceBlog: BlogService
    ) {
        this.pageCount = 1;
    }

    onResize(event) {
        console.log(event);
        return 100;
        //    return window.innerWidth;
    }

    ngAfterViewInit() {
        const closetParent = this.host.nativeElement.parentNode.parentNode;
        this.updateBottomContent(1);
        this.scrollView.instance.option('onReachBottom', this.updateBottomContent);
    }

    updateContent = (args, eventName) => {
//        this.pageCount = Math.round(Math.random() * 10);
        this.serviceBlog.enduroJsonStore.load({skip: this.pageCount++})
        .then((updateContentText: string) => {
            if (this.updateContentTimer) {
                clearTimeout(this.updateContentTimer);
            }
            this.updateContentTimer = setTimeout(() => {
                this.content = (eventName === 'PullDown' ? updateContentText + this.content : this.content +  updateContentText);
                args.component.release();
            }, 500);
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
        const position = 0;
//        this.scrollView.instance.scrollTop();
        this.scrollView.instance.scrollTo(0);
//        if (position >= 0) {
//            this.scrollView.instance.scrollTo(this.scrollView.instance.scrollHeight());
//        }
//        this.top.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
}

