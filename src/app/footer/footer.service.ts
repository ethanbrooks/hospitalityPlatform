import { Injectable } from '@angular/core';
import { ArrayType } from '@angular/compiler';

export class FooterItems {
    text: string;
    cssclass: string;
    imagesrc: string;
}

let footerItems: FooterItems[] = [
    {text: 'Home', cssclass: 'nav-icon', imagesrc: '/assets/img/nav-icon/logo.svg'},
    {text: 'The Hotel', cssclass: 'nav-icon', imagesrc:'/assets/img/nav-icon/hotel.svg'},
    {text: 'The Restaurant', cssclass: 'nav-icon', imagesrc:'/assets/img/nav-icon/restaurant.svg'},
    {text: 'The Lounge',  cssclass: 'nav-icon', imagesrc:'/assets/img/nav-icon/bar.svg'},
    {text: 'Explore',  cssclass: 'nav-icon', imagesrc: '/assets/img/nav-icon/travel.svg'}
];





@Injectable()
export class footerService {
    getFooterItems(): FooterItems[] {
        return footerItems;
    }
}
