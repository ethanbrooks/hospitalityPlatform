import {Injectable} from '@angular/core';

export class Languages {
    ID: number;
    Name: string;
    IconSrc: string;
}

const languages: Languages[] = [{
    ID: 1,
    Name: 'Español',
    IconSrc: 'es_PA.svg'
}, {
    ID: 2,
    Name: 'English',
    IconSrc: 'en_US.svg'
}];

@Injectable()
export class Service {
    getLanguages(): Languages[] {
        return languages;
    }
}
