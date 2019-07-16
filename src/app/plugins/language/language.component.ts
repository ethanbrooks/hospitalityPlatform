import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {TranslateService} from '@ngx-translate/core';

import {
    DxSelectBoxModule,
    DxLoadIndicatorModule,
    DxTemplateModule
} from 'devextreme-angular';
import ArrayStore from 'devextreme/data/array_store';

import {Languages, Service} from './language.service';

if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.css'],
    providers: [Service]
})

export class LanguageComponent {
    simpleProducts: string[];
    languages: Languages[];
    data: any;
    isLoaded = true;
    selectedItem: any;
    deferredProducts: any;

    constructor(
        service: Service,
        public translate: TranslateService
    ) {
        const that = this;
        this.languages = service.getLanguages();
        this.selectedItem = this.languages[0];

        translate.addLangs(['en_US', 'es_PA']);
        translate.setDefaultLang('en_US');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es/) ? browserLang : 'en_US');
      }

}
