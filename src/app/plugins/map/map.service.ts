import { Injectable } from '@angular/core';

const markerUrl = 'https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png';

export class MapSetting {
    key: string;
    name: string;
}

export class Tooltip {
    isShown: boolean;
    text: string;
}

export class Marker {
    location: any;
// Fix: this doesn't work
    iconSrc: any;
    tooltip: any;
}

export class Route {
    weight: number;
    color: string;
    opacity: number;
    mode: string;
    locations: any[];
}

const markers: Marker[] = [{
    location: 'Hotel Herrera, Calle 9a Oeste, Panama City, Panama',
    iconSrc: '/assets/img/app-icon/favicon-32x32.png',
    tooltip: {
        text: 'Hotel Herrera'
    }
}];

const routes: Route[] = [{
    weight: 6,
    color: 'blue',
    opacity: 0.5,
    mode: 'walking',
    locations: [
        { lat:  8.9520449, lng: -79.5385695},
        { lat:  8.9520449, lng: -79}
    ]
}];

const mapTypes: MapSetting[] = [{
    key: 'roadmap',
    name: 'Road Map'
}, {
    key: 'satellite',
    name: 'Satellite (Photographic) Map'
}, {
    key: 'hybrid',
    name: 'Hybrid Map'
}];



@Injectable()
export class MapService {
    getMapTypes(): MapSetting[] {
        return mapTypes;
    }
    getMarkers(): Marker[] {
        return markers;
    }
    getRoutes(): Route[] {
        return routes;
    }
    getMarkerUrl(): string {
        return markerUrl;
    }
}
