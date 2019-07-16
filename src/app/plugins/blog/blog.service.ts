import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import CustomStore from 'devextreme/data/custom_store';


@Injectable()
export class BlogService {
    enduroJsonStore: CustomStore;
    updateContentTimer: any;
    content: string;
    constructor(
        private httpClient: HttpClient
    ) {
        this.enduroJsonStore = new CustomStore({
           // key: ["path"],
            errorHandler:  (error) => {
                console.log(error.message);
            },
            load:  () => {
                const params: HttpParams = new HttpParams();
                [].forEach((i) => {
//                    params = params.set(i, JSON.stringify(query[i]));
                });
                const eduroJsUrl = '/assets/data/en_US/blogs/';
                return httpClient.get(eduroJsUrl, { params, responseType: 'text'})
                .toPromise()
                .then(
                    (enduroJsDataLoad: string) => {
                        return enduroJsDataLoad ;
                    },
                    (error) => {
                        console.log(error);
                    }
                );
            },
            byKey: () => {
                const params: HttpParams = new HttpParams();
                [].forEach((i) => {
//                    params = params.set(i, JSON.stringify(query[i]));
                });
                const eduroJsUrl = '/blog/cookies';
                return httpClient.get(eduroJsUrl, { params, responseType: 'text'})
                .toPromise()
                .then(
                    (enduroJsData: string) => {
                        return enduroJsData;
                    },
                    (error) => {
                        console.log(error);
                    }
                );
            }
        });
    }
}
