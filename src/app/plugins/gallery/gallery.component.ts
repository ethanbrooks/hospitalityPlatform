import { Component, ViewChild } from '@angular/core';
import { DxDrawerComponent } from 'devextreme-angular';
import { Item, GalleryService } from './gallery.service';

@Component({
    selector: 'app-gallery',
    providers: [ GalleryService ],
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})

export class GalleryComponent {
    @ViewChild(DxDrawerComponent, {static: false}) drawer: DxDrawerComponent;
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

    holdEvent(e) {
        console.log(this);
    }

    constructor(service: GalleryService) {
        this.items = service.getItems();
    }
}
