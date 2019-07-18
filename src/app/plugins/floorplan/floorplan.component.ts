import { Component } from '@angular/core';
import { projection } from 'devextreme/viz/vector_map/projection';

import {  FeatureCollection, FloorplanService  } from './floorplan.service';


@Component({
    selector: 'app-floorplan',
    templateUrl: './floorplan.component.html',
    styleUrls: ['./floorplan.component.css'],
    providers: [FloorplanService]
})

export class FloorplanComponent {
    projection: any;
    roomsData: FeatureCollection;
    buildingData: FeatureCollection;

    constructor(service: FloorplanService) {
        this.roomsData = service.getRoomsData();
        this.buildingData = service.getBuildingData();
        this.projection = projection({
            to(coordinates) {
                return [coordinates[0] / 100, coordinates[1] / 100];
            },

            from(coordinates) {
                return [coordinates[0] * 100, coordinates[1] * 100];
            }
        });
    }

    customizeTooltip(arg) {
        if (arg.layer.name === 'rooms') {
            return {
                text: 'Square: ' + arg.attribute('square') + ' ft&#178'
            };
        }
    }
}
