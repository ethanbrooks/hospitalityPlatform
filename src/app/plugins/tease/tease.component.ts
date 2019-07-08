import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxTabPanelModule,
         DxTreeViewModule,
         DxTemplateModule } from 'devextreme-angular';


import { Continent, City, Country, teaseService } from './tease.service';


@Component({
    selector: 'app-tease',
    templateUrl: './tease.component.html',
    styleUrls: ['./tease.component.css'],
    providers: [teaseService]
})

export class TeaseComponent {
    continents: Continent[];
    countryData: Country;
    citiesData: City[];
    tabPanelIndex: number;

    changeSelection(e) {
        var countryData = e.itemData;
        if(countryData.cities) {
            this.countryData = e.itemData;
            this.citiesData = countryData.cities;
            this.tabPanelIndex = 0;
        }
    }

    constructor(service: teaseService) {
        this.continents = service.getContinents();
        this.countryData = this.continents[0].items[0];
        this.citiesData = this.countryData.cities;
        this.tabPanelIndex = 0;
    }
}