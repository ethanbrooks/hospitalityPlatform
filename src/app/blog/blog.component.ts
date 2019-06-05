import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {  DxScrollViewModule, DxScrollViewComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';

import { blogService } from './blog.service';


@Component({
    selector: 'app-blog',
    providers: [ blogService ],
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements AfterViewInit {    @ViewChild(DxScrollViewComponent) scrollView: DxScrollViewComponent;
    showScrollbarModes: any[];
    content: string;
    updateContentTimer: number;
    scrollbarMode: string;

    constructor (service: blogService) {
        this.content = service.getContent();

        this.showScrollbarModes = [{
            text: "On Scroll",
            value: "onScroll"
        }, {
            text: "On Hover",
            value: "onHover"
        }, {
            text: "Always",
            value: "always"
        }, {
            text: "Never",
            value: "never"
        }];

        this.scrollbarMode = this.showScrollbarModes[0].value;

    }
    ngAfterViewInit() {
        this.scrollView.instance.option("onReachBottom", this.updateBottomContent);
    }
    valueChanged = (data) => {
        this.scrollView.instance.option("onReachBottom", data.value ? this.updateBottomContent : null);
    }

    updateContent = (args, eventName) => {
        var updateContentText = "<br /><div>Content has been updated on the " + eventName + " event.</div><br />";
        if(this.updateContentTimer)
            clearTimeout(this.updateContentTimer);
        this.updateContentTimer = setTimeout(() => {
            this.content = (eventName == "PullDown" ? updateContentText + this.content : this.content +  updateContentText);
            args.component.release();
        }, 500);
    };
    updateTopContent = (e) => {
        this.updateContent(e, "PullDown");
    }
    updateBottomContent = (e) => {
        this.updateContent(e, "ReachBottom");
    }
}