import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Languages, Service} from './language.service';

@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.css'],
    providers: [Service]
})

export class LanguageComponent {
    languages: Languages[];
    language: Languages;

    defaultLang = 'en_US';

    constructor(
        service: Service,
        public translate: TranslateService
    ) {
        translate.addLangs(['en_US', 'es_PA']);

        this.languages = service.getLanguages().filter((value) => {
//            if (translate.getLangs().includes(value.ID)) {
//                return value;
//            }
        });

 //       translate.setDefaultLang(this.defaultLang);
        //const browserLang = translate.getBrowserLang();
 ///       const browserCultureLang = translate. getBrowserCultureLang();
  //      translate.use('en_US');
        //translate.use(browserLang.match(/en|es/) ? browserCultureLang : 'en_US');

        const languagesArr = this.languages.filter((value) => {
            if (value.ID === translate.currentLang) {
                return value;
            }
        });
        this.language = languagesArr[0];
      }

      consoler(text) {
        console.log(text);
      }

}
