import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import config from 'devextreme/core/config';
import { DxSpeedDialActionModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';

import { FooterItems, footerService } from './footer.service';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    providers: [footerService]
})

export class FooterComponent {
    footerData: FooterItems[];
    listData: any[];
    currentData: any;

    constructor(service: footerService) { 
        this.footerData = service.getFooterItems();

    }

}