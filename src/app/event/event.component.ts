import { NgModule, Component, Inject, enableProdMode } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxSchedulerModule } from 'devextreme-angular';

import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
})

export class EventComponent {

    dataSource: any;
    currentDate: Date = new Date(Date.now());
  
    constructor(private http: HttpClient) {
        this.dataSource = new DataSource({
            store: new CustomStore({
                load: (options) => this.getData(options, { showDeleted: false })
            })
        });
    }

    private getData(options: any, requestOptions: any) {
        let PUBLIC_KEY = 'AIzaSyBfDGjnDWn5o-4X0-0HH5hDdM9WGJSPE4k',
            CALENDAR_ID = 'ZXRoYW4uYnJvb2tzQGdtYWlsLmNvbQ@group.calendar.google.com';
        let dataUrl = [ 'https://www.googleapis.com/calendar/v3/calendars/',
                CALENDAR_ID, '/events?key=', PUBLIC_KEY].join('');
        return this.http.get(dataUrl, requestOptions).toPromise().then((data: any) => data.items);
    }
}

