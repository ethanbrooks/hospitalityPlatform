import { Component, enableProdMode } from '@angular/core';

import { DxListModule, DxNavBarModule, DxTemplateModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';

import { mapService, MapSetting, Route, Marker } from './map.service';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css'],
    providers: [mapService]
})

export class MapComponent {
    customMarkerUrl: string;
    mapMarkerUrl: string;
    routes: Route[];
    markers: Marker[];
    mapTypes: MapSetting[];
    type = 'roadmap';
    keys = {};
    
    checkCustomMarker(data) {
        this.mapMarkerUrl = data.value ? this.customMarkerUrl : null;
    }

    constructor(service: mapService) {
        this.mapTypes = service.getMapTypes();
        this.markers = service.getMarkers();
        this.routes = service.getRoutes();
        this.customMarkerUrl = this.mapMarkerUrl = service.getMarkerUrl();
       
        // NOTE: Specify your map API keys for every used provider
        //this.keys["bing"] = "YOUR_BING_MAPS_API_KEY";
        this.keys["google"] = "AIzaSyBQo-hIq1UHJOPpNFzaChqa9pVfB7puggI";
        this.keys["googleStatic"] = "AIzaSyBQo-hIq1UHJOPpNFzaChqa9pVfB7puggI";
    }
}