import { Injectable } from "@angular/core";
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import CustomStore from 'devextreme/data/custom_store';


@Injectable()
export class BlogService {
    private enduroJsDataSubject = new ReplaySubject<string>(0);
    enduroJsData$: Observable<string> = this.enduroJsDataSubject.asObservable();
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
            load: function (loadOptions: any) {
                var userData = {
                    query:{
                        limit:200,
                        searchable:false
                    }    
                };
//This is needed for remote operations
                let params: HttpParams = new HttpParams();
                [].forEach(function(i) {
                    if(i in loadOptions.userData.query && loadOptions.userData.query[i] === "") 
                        params = params.set(i, JSON.stringify(loadOptions.userData.query[i]));
                });
                var eduroJsUrl = 'http://localhost:8080/generators/blog/cookies.js';
                return httpClient.get(eduroJsUrl,{params:params, responseType: 'text'})
                .toPromise()
                .then((enduroJsData: string) => {
                    return enduroJsData;
                })
                .catch(error => { throw 'Data Loading Error' });
            },


            byKey: (eduroJsUrl:string) => {
            //    this.messageId = 'messageId';              
                let params: HttpParams = new HttpParams();
                [].forEach(function(i) {
//                    params = params.set(i, JSON.stringify(query[i]));
                });
                var eduroJsUrl = '/blog/cookies';
                return httpClient.get(eduroJsUrl,{params:params, responseType: 'text'})
                .toPromise()
                .then(
                    (enduroJsData: string) => {
                        this.enduroJsDataSubject.next(enduroJsData);
                     //   return enduroJsData;
                    },
                    (error) => { 
                        console.log(error);
                    }
                );
            }  
        });
/**
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
    }
}
