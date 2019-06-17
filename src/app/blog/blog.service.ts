import { Injectable } from "@angular/core";
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import CustomStore from 'devextreme/data/custom_store';


@Injectable()
export class BlogService {
    private enduroJsDataSubject = new ReplaySubject<Object>(1);
    enduroJsData$: Observable<Object> = this.enduroJsDataSubject.asObservable();
    enduroJsonStore: CustomStore;

    constructor(
        private httpClient: HttpClient, 
        private sanitizer: DomSanitizer
    ) {
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
    }
}
