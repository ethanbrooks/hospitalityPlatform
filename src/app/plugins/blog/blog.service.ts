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
            load:  (LoadOptions: any) => {
                console.log(LoadOptions);
                const params: HttpParams = new HttpParams();
                [].forEach((i) => {
//                    params = params.set(i, JSON.stringify(query[i]));
                });
// TODO: set the directrouy index in CF
/*
		<article>
			<div class="work-entry-flex">
				<div class="col-one-half no-gutters">
					<div class="article-image" style="background-image: url('//beta.hotelherrera.com/image-src/fit-in/640x480/filters:grayscale()/{{{content.blog_image}}}');">
					</div>
				</div>
				<div class="col-one-half  no-gutters">
					<div class="article-text">
						<h2><a href="{{{content.blog_link}}}" target="_blank">{{{content.blog_title}}}</a></h2>
						<p>{{{content.blog_article}}}</p>
						<p><a href="{{{content.blog_link}}}" target="_blank" class="btn-view">Read More</a></p>
					</div>
				</div>
			</div>
        </article>
*/



                const eduroJsUrl = '/data/en/page-' + LoadOptions.skip + '/index.html';
                return httpClient.get(eduroJsUrl, { params, responseType: 'text'})
                .toPromise()
                .then(
                    (enduroJsDataLoad: string) => {
                        return enduroJsDataLoad;
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
                const eduroJsUrl = '/data/blog/cookies/index.html';
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
