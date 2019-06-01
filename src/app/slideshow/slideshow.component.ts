import { Component, enableProdMode } from '@angular/core';
import { DxGalleryModule } from 'devextreme-angular';
import { Item, slideshowService  } from './slideshow.service';


@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.css'],
    providers: [slideshowService]
})

export class SlideshowComponent {
    items: Item[];
    currentItem: Item = new Item();
    slideshowDelay = 2000;
    constructor(service: slideshowService) {
            this.items = service.getItems();
    }
    valueChanged(e) {
        this.slideshowDelay = e.value ? 2000 : 0;
    }
}