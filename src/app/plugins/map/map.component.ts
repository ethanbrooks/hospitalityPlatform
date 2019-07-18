import { Component } from '@angular/core';
import { MapService, MapSetting, Route, Marker } from './map.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css'],
    providers: [MapService]
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

    constructor(service: MapService) {
        this.mapTypes = service.getMapTypes();
        this.markers = service.getMarkers();
        this.routes = service.getRoutes();
        this.customMarkerUrl = this.mapMarkerUrl = service.getMarkerUrl();

        // NOTE: Specify your map API keys for every used provider
        // this.keys["bing"] = "YOUR_BING_MAPS_API_KEY";
        const googleKey = 'google';
        this.keys[googleKey] = 'AIzaSyBQo-hIq1UHJOPpNFzaChqa9pVfB7puggI';
        const googleStaticKey = 'googleStatic';
        this.keys[googleStaticKey] = 'AIzaSyBQo-hIq1UHJOPpNFzaChqa9pVfB7puggI';
    }
}
