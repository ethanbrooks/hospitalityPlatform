import { NgModule, Component, enableProdMode,  ViewChild, ElementRef  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxBoxModule, DxListModule, DxNavBarModule, DxTemplateModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';

import { NavItems, topNavService } from './topnav.service';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.css'],
    providers: [topNavService]
})

export class TopnavComponent {
@ViewChild('navbar') navbar: ElementRef;
    navBarData: NavItems[];
    listData: any[];
    currentData: any;


    actionItem(e){
        this.currentData = this.navBarData[e.itemIndex];
        window.location.href = this.currentData.action;
    }

    constructor(service: topNavService) { 
        this.navBarData = service.getNavItems();
        

/**
 * This is wonkey
 */
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
          if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
          } else {
            document.getElementById("navbar").style.top = "-190px";
          }
          prevScrollpos = currentScrollPos;
        }
        
    }

}