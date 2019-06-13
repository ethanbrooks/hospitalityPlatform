import { Component, ViewChild } from '@angular/core';
import { DxDrawerComponent, DxDrawerModule, DxListModule, DxTileViewModule, DxSelectBoxModule, DxPopupModule, DxButtonModule, DxTemplateModule} from 'devextreme-angular';
import { Item, galleryService } from './gallery.service';

@Component({
    selector: 'app-gallery',
    providers: [ galleryService ],
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})

export class GalleryComponent {
    @ViewChild(DxDrawerComponent) drawer: DxDrawerComponent;
    items: Item[];
    currentItem: Item = new Item();
    popupVisible = false;

    text: string;
    elementAttr: any;


    toolbarContent = [{
        widget: 'dxButton',
        location: 'before',
        options: {
            icon: 'menu',
            onClick: () => this.drawer.instance.toggle()
        }
    }];


    showInfo(e) {
        this.currentItem = this.items[e.itemIndex];
        console.log(this.currentItem);
        this.popupVisible = true;
    }

    constructor(service: galleryService) {
        this.items = service.getItems();
    }
}