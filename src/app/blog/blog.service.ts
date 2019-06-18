import { Injectable } from "@angular/core";
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import CustomStore from 'devextreme/data/custom_store';


@Injectable()
export class BlogService {
    private enduroJsDataSubject = new ReplaySubject<string>(0);
    enduroJsData$: Observable<string> = this.enduroJsDataSubject.asObservable();
    enduroJsData: string;
    enduroJsonStore: CustomStore;
    updateContentTimer: any;

    constructor(
        private httpClient: HttpClient, 
        private sanitizer: DomSanitizer
    ) {
        this.enduroJsonStore = new CustomStore({
            key: ["path"],
            errorHandler: function (error) {
                console.log(error.message);
            },
            load: function () {
                let params: HttpParams = new HttpParams();
                [].forEach(function(i) {
//                    params = params.set(i, JSON.stringify(query[i]));
                });
                var eduroJsUrl = '/blog/';
                return httpClient.get(eduroJsUrl,{params:params, responseType: 'text'})
                .toPromise()
                .then(
                    (enduroJsData: string) => {
                        this.enduroJsDataSubject.next(enduroJsData);
                    },
                    (error) => { 
                        console.log(error);
                    }
                );
            },
            byKey: () => {
                let params: HttpParams = new HttpParams();
                [].forEach(function(i) {
//                    params = params.set(i, JSON.stringify(query[i]));
                });
                var eduroJsUrl = '/blog/cookies';
                var eduroJsUrl = '/blog/';
                return httpClient.get(eduroJsUrl,{params:params, responseType: 'text'})
                .toPromise()
                .then(
                    (enduroJsData: string) => {

                        this.enduroJsData = enduroJsData;
                        this.enduroJsDataSubject.next(enduroJsData);
                    },
                    (error) => { 
                        console.log(error);
                    }
                );
            }  
        });
    }
    
    updateContent = (args, eventName) => {
        console.log('updateContent');
       // var enduroJsData = '<h1>Original contnet</h1><br>';
        if(this.updateContentTimer)
            clearTimeout(this.updateContentTimer);
        this.updateContentTimer = setTimeout(() => {
            console.log('updateContentTimer');
            this.enduroJsData = (eventName == "PullDown" ? '<h1>--pull-up---</h1><br>' + this.enduroJsData : this.enduroJsData +  '<h1>--pull-down---</h1><br>');
            this.enduroJsDataSubject.next(this.enduroJsData);
            args.component.release();
        }, 100);
    };
}
        /**
 
    getHtml() : string {
        var hand;
        var content = '';
        var pull;
        var push;
       // for (let o of fruits) {
        for(var i=0; i < 1; i++) { 
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
    
    this.enduroJsonStore = new CustomStore({
            key: ["path"],
            errorHandler: function (error) {
                console.log(error.message);
            },
            byKey: (path:string) => {
            //    this.messageId = 'messageId';              
                let params: HttpParams = new HttpParams();
                [].forEach(function(i) {
//                    params = params.set(i, JSON.stringify(query[i]));
                });
                var eduroJsUrl = 'http://localhost:8080/index.json';//+path;
                return httpClient.get(eduroJsUrl,
                {
                    params: params,
                })
                .toPromise()
                .then(
                    (enduroJsData: object) => {
                        console.log(enduroJsData);
                    },
                    (error) => { 
                        console.log(error);
                    }
                );
            }  
        });
     */
 
