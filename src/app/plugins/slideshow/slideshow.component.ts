import { Component } from '@angular/core';
import { Item, SlideshowService  } from './slideshow.service';


@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.css'],
    providers: [SlideshowService]
})

export class SlideshowComponent {
   // currentEmployee: Employee = new Employee();
   // employees: Employee[];
    popupHorVisible = false;
    popupVertVisible = false;

    items: Item[];
    currentItem: Item = new Item();
    slideshowDelay = 2000;
    constructor(service: SlideshowService) {
            this.items = service.getItems();
    }
    valueChanged(e) {
        this.slideshowDelay = e.value ? 2000 : 0;
    }


    showHor(employee) {
//      this.currentItem = employee;
        this.popupHorVisible = true;
    }

    showVert(employee) {
  //      this.currentItem = employee;
        this.popupVertVisible = true;
    }
}
