import { NgModule, Component, ViewChild, enableProdMode, ɵConsole } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
         DxCheckBoxModule,
         DxDateBoxModule,
         DxCalendarModule,
         DxTemplateModule,
         DxNumberBoxModule,
         DxButtonModule,
         DxFormModule,
         DxAutocompleteModule,
         DxFormComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';

import { Customer, bookingService } from './booking.service';
import { createOfflineCompileUrlResolver } from '@angular/compiler';


@Component({
    selector: 'app-booking',
    providers: [ bookingService ],
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css']
})
export class BookingComponent {
    @ViewChild(DxFormComponent, {static: false}) form: DxFormComponent

    now: Date = new Date();
    currentValue: Date = new Date();
    firstDay = 0;

    minDateValue: Date = undefined;
    maxDateValue: Date = undefined;
    disabledDates: Function = null;
    zoomLevels: string[] = [
        'month', 'year', 'decade', 'century'
    ];
    cellTemplate = 'cell';
    holydays: any = [[1, 0], [4, 6], [25, 11]];
    isWeekend(date) {
        const day = date.getDay();
        return day === 0 || day === 6;
    }
    setMinDate(e) {
        if (e.value) {
            this.minDateValue = new Date(this.now.getTime() - 1000 * 60 * 60 * 24 * 3);
        } else {
            this.minDateValue = undefined;
        }
    }

    setMaxDate(e) {
        if (e.value) {
            this.maxDateValue = new Date(this.now.getTime() + 1000 * 60 * 60 * 24 * 3);
        } else {
            this.maxDateValue = undefined;
        }
    }

    disableWeekend(e) {
        if (e.value) {
            const that = this;
            that.disabledDates = (data) => {
                return data.view === 'month' && that.isWeekend(data.date);
            };
        } else {
            this.disabledDates = undefined;
        }
    }

    setFirstDay(e) {
        if (e.value) {
            this.firstDay = 1;
        } else {
            this.firstDay = 0;
        }
    }

    useCellTemplate(e) {
        if (e.value) {
            this.cellTemplate = 'custom';
        } else {
            this.cellTemplate = 'cell';
        }
    }

    getCellCssClass(date) {
        let cssClass = '';
        if ( this.isWeekend(date) ) {
            cssClass = 'weekend';
        }
        this.holydays.forEach((item) => {
            if (date.getDate() === item[0] && date.getMonth() === item[1]) {
                cssClass = 'holiday';
                return false;
            }
        });

        return cssClass;
    }

    password = '';

    passwordOptions: any = {
        mode: "password",
        value: this.password
    };

    customer: Customer;
    countries: string[];
    cities: string[];
    maxDate: Date = new Date();
    cityPattern = "^[^0-9]+$";
    namePattern: any = /^[^0-9]+$/;
    phonePattern: any = /^\+\s*1\s*\(\s*[02-9]\d{2}\)\s*\d{3}\s*-\s*\d{4}$/;
    phoneRules: any = {
        X: /[02-9]/
    }
    buttonOptions: any = {
        text: "Register",
        type: "success",
        useSubmitBehavior: true
    }




    passwordComparison = () => {
        return this.form.instance.option("formData").Password;
    };
    checkComparison() {
        return true;
    }
    constructor(service: bookingService) {

    console.log('dfads');

        this.maxDate = new Date(this.maxDate.setFullYear(this.maxDate.getFullYear() - 21));
        this.countries = service.getCountries();
        this.cities = service.getCities();
        this.customer = service.getCustomer();
    }

    onFormSubmit = (e) => {
        notify({
            message: 'You have submitted the form',
            position: {
                my: 'center top',
                at: 'center top'
            }
        }, 'success', 3000);
        e.preventDefault();
    }
}