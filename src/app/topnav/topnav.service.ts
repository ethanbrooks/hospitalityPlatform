import { Injectable } from '@angular/core';
import { ArrayType } from '@angular/compiler';

export class NavItems {
    text: string;
    cssclass: string;
    imagesrc: string;
}

let navItems: NavItems[] = [
    {text: 'Home', cssclass: 'nav-icon', imagesrc: '/assets/img/nav-icon/logo.svg'},
    {text: 'The Hotel', cssclass: 'nav-icon', imagesrc:'/assets/img/nav-icon/hotel.svg'},
    {text: 'The Restaurant', cssclass: 'nav-icon', imagesrc:'/assets/img/nav-icon/restaurant.svg'},
    {text: 'The Lounge',  cssclass: 'nav-icon', imagesrc:'/assets/img/nav-icon/bar.svg'},
    {text: 'Explore',  cssclass: 'nav-icon', imagesrc: '/assets/img/nav-icon/travel.svg'}
];



/*
, children:
    [
        {text: 'Casco Viejo',  class: 'sub-nav-icon', src: '/assets/img/nav-icon/casco-viejo.svg'},
        {text: 'Around Town',  class: 'sub-nav-icon', src: '/assets/img/nav-icon/around-town.svg'},            
        {text: 'Nearby',  class: 'sub-nav-icon', src: '/assets/img/nav-icon/nearby.svg'}, 
        {text: 'Beyond',  class: 'sub-nav-icon', src: '/assets/img/nav-icon/beyond.svg'} 
    ]
*/

@Injectable()
export class topNavService {
    getNavItems(): NavItems[] {
        return navItems;
    }
}
