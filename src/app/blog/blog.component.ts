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
        './blog.component.css',
//        './bootstrap.css'
    ]
})
export class BlogComponent implements AfterViewInit {
    @ViewChild(DxScrollViewComponent) scrollView: DxScrollViewComponent;     

    enduroJsData$: Observable<object> = null;

    showScrollbarModes: any[];
    content: string;
    updateContentTimer: number;
    scrollbarMode: string;

    constructor (
        private serviceBlog: BlogService
    ) {
        this.content = this.getHtml();
        console.log(this.content);
    }
    
    ngAfterViewInit() {
        this.enduroJsData$ =  this.serviceBlog.enduroJsData$;
        this.getEnduroJsData('/index.json');
        this.scrollView.instance.option("onReachBottom", this.updateBottomContent);
    }
  

    getEnduroJsData(path:string) : void {
        this.serviceBlog.enduroJsonStore.byKey({
            path: path,
        });
    }

    getHtml() : string {
        var hand;
        var content = '';
        var pull;
        var push;
       // for (let o of fruits) {
        for(var i=0; i < 4; i++) { 
            if(i % 2){
                hand = 'left';
                pull = '';
                push = '';
            }else{
                hand = 'right';
                pull = ' col-md-pull-12';
                push = ' col-md-push-10';
            };  
            content += 
            `<article class="col-md-12">
                <div class="work-entry-flex animate-box js-fullheight fadeInUp animated" style="height: 296px;">
                    <div class="col-three-forth js-fullheight" style="height: 296px;">
                        <div class="row no-gutters">
                            <div class="col-md-12`+push+` no-gutters">
                                <div class="work-img js-fullheight" style="background-image: url('/assets/img/menu/1111GT-animal-pork-ribs-628.jpg'); height: 296px;">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-one-forth js-fullheight" style="height: 296px;">
                        <div class="row no-gutters">
                            <div class="col-md-12`+pull+` no-gutters">
                                <div class="display-t js-fullheight" style="height: 296px;">
                                    <div class="display-tc js-fullheight" style="height: 296px;">
                                        <div class="text-inner text-inner-`+hand+`">
                                            <h2><a href="work-single.html">Application and practice of creating durable images</a></h2>
                                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                            <p><a href="work-single.html" class="btn-view">View Photo</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>`;
        } 
        return content; 
    }
    

    valueChanged = (data) => {
        this.scrollView.instance.option("onReachBottom", data.value ? this.updateBottomContent : null);
    }

    updateContent = (args, eventName) => {
       
        var updateContentText = this.content;
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
