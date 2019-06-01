import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxSchedulerModule, DxTemplateModule } from 'devextreme-angular';
import { eventService, Employee } from './event.service';

import DataSource from 'devextreme/data/data_source';

@Component({
    selector: 'app-event',
    providers: [ eventService ],
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
})

export class EventComponent {

    dataSource: any;
    currentDate: Date = new Date(2016, 7, 2, 11, 30);
    resourcesDataSource: Employee[];

    constructor(service: eventService) {
        console.log('dafasdfa');
        this.dataSource = new DataSource({
            store: service.getData()
        });

        this.resourcesDataSource = service.getEmployees();
    }

    markWeekEnd(cellData) {
        function isWeekEnd(date) {
            var day = date.getDay();
            return day === 0 || day === 6;
        }
        var classObject = {};
        classObject["employee-" + cellData.groups.employeeID] = true;
        classObject['employee-weekend-' + cellData.groups.employeeID] = isWeekEnd(cellData.startDate)
        return classObject;
    }
}