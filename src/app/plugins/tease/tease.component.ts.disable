import { Component } from '@angular/core';
import { Continent, City, Country, TeaseService } from './tease.service';


@Component({
    selector: 'app-tease',
    templateUrl: './tease.component.html',
    styleUrls: ['./tease.component.css'],
    providers: [TeaseService]
})

export class TeaseComponent {
    continents: Continent[];
    countryData: Country;
    citiesData: City[];
    tabPanelIndex: number;

    changeSelection(e) {
        const countryData = e.itemData;
        if (countryData.cities) {
            this.countryData = e.itemData;
            this.citiesData = countryData.cities;
            this.tabPanelIndex = 0;
        }
    }

    constructor(service: TeaseService) {
        this.continents = service.getContinents();
        this.countryData = this.continents[0].items[0];
        this.citiesData = this.countryData.cities;
        this.tabPanelIndex = 0;
    }
}
