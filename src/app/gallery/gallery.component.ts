import { Component } from '@angular/core';
import { DxTileViewModule, DxSelectBoxModule, DxPopupModule, DxButtonModule, DxTemplateModule} from 'devextreme-angular';
import { Item, galleryService } from './gallery.service';

@Component({
    selector: 'app-gallery',
    providers: [ galleryService ],
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})

export class GalleryComponent {
    items: Item[];
    currentItem: Item = new Item();
    popupVisible = false;
    
    showInfo(e) {
        this.currentItem = this.items[e.itemIndex];
        console.log(this.currentItem);
        this.popupVisible = true;
    }

    constructor(service: galleryService) {
        this.items = service.getItems();
    }
}