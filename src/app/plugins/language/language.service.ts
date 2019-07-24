import {Injectable} from '@angular/core';

export class Languages {
    ID: string;
    Name: string;
    IconSrc: string;
}

const languages: Languages[] = [{
    ID: 'es-PA',
    Name: 'Panameño Español ',
    IconSrc: 'es-PA.svg'
}, {
    ID: 'en_US',
    Name: 'US English',
    IconSrc: 'en-US.svg'
}, {
    ID: 'fr',
    Name: 'French',
    IconSrc: 'fr.svg'
}];

@Injectable()
export class Service {
    getLanguages(): Languages[] {
        return languages;
    }
}
