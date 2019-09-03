import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
        const PUBLIC_KEY = 'xxx';
        const CALENDAR_ID = 'xx';
        const dataUrl = [ 'https://www.googleapis.com/calendar/v3/calendars/',
            CALENDAR_ID, '/events?key=', PUBLIC_KEY].join('');
        return this.http.get(dataUrl, requestOptions).toPromise().then((data: any) => data.items);
    }
}

