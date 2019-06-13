import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxBoxModule, DxListModule, DxNavBarModule, DxTemplateModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';

import { NavItems, topNavService } from './topnav.service';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.css'],
    providers: [topNavService]
})

export class TopnavComponent {
    navBarData: NavItems[];
    listData: any[];
    currentData: any;
   
    actionItem(e){
        this.currentData = this.navBarData[e.itemIndex];
        window.location.href = this.currentData.action;
    }

    constructor(service: topNavService) { 
        this.navBarData = service.getNavItems();

    }

}