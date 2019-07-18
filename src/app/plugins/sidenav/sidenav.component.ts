import { Component, ViewChild } from '@angular/core';
import { List, SidenavService } from './sidenav.service';
import { DxDrawerComponent } from 'devextreme-angular';


@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
    providers: [SidenavService],
    preserveWhitespaces: true
})
export class SidenavComponent {
    @ViewChild(DxDrawerComponent, {static: false}) drawer: DxDrawerComponent;
    navigation: List[];
    showSubmenuModes: string[] = ['slide', 'expand'];
    positionModes: string[] = ['left', 'right'];
    showModes: string[] = ['push', 'shrink', 'overlap'];
    text: string;
    selectedOpenMode = 'shrink';
    selectedPosition = 'left';
    selectedRevealMode = 'slide';
    elementAttr: any;

    constructor(service: SidenavService) {
        this.text = service.getContent();
        this.navigation = service.getNavigationList();
    }

    toolbarContent = [{
        widget: 'dxButton',
        location: 'before',
        options: {
            icon: 'menu',
            onClick: () => this.drawer.instance.toggle()
        }
    }];
}
