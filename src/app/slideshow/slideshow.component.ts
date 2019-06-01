import { Component, enableProdMode } from '@angular/core';
import { DxGalleryModule } from 'devextreme-angular';
import { House, slideshowService  } from './slideshow.service';


@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.css'],
    providers: [slideshowService]
})

export class SlideshowComponent {
    dataSource: House[];
    slideshowDelay = 2000;
    constructor(service: slideshowService) {
        this.dataSource = service.getHouses();
    }
    valueChanged(e) {
        this.slideshowDelay = e.value ? 2000 : 0;
    }
}