import { Component, enableProdMode } from '@angular/core';
import { DxVectorMapModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import { projection } from 'devextreme/viz/vector_map/projection';

import {  FeatureCollection, floorplanService  } from './floorplan.service';


@Component({
    selector: 'app-floorplan',
    templateUrl: './floorplan.component.html',
    styleUrls: ['./floorplan.component.css'],
    providers: [floorplanService]
})

export class FloorplanComponent {
    projection: any;
    roomsData: FeatureCollection;
    buildingData: FeatureCollection;
    
    constructor(service: floorplanService) {
        this.roomsData = service.getRoomsData();
        this.buildingData = service.getBuildingData();
        this.projection = projection({
            to: function (coordinates) {
                return [coordinates[0] / 100, coordinates[1] / 100];
            },

            from: function (coordinates) {
                return [coordinates[0] * 100, coordinates[1] * 100];
            }
        });
    }

    customizeTooltip(arg) {
        if(arg.layer.name === "rooms")
            return {
                text: "Square: " + arg.attribute("square") + " ft&#178"
            };
    }
}