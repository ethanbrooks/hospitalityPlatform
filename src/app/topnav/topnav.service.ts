import { Injectable } from '@angular/core';

export class NavItems {
    text: string;
    cssclass: string;
    imagesrc: string;
    action: string;
    children?: Array<NavItems>;
}

let navItems: NavItems[] = [
    {text: 'Home', cssclass: 'nav-icon', action: '/', imagesrc: '/assets/img/nav-icon/logo.svg'},
    {text: 'The Hotel', cssclass: 'nav-icon', action: '/the-hotel', imagesrc:'/assets/img/nav-icon/hotel.svg'},
    {text: 'The Restaurant', cssclass: 'nav-icon', action: '/the-restaurant', imagesrc:'/assets/img/nav-icon/restaurant.svg'},
    {text: 'The Lounge',  cssclass: 'nav-icon', action: '/the-lounge', imagesrc:'/assets/img/nav-icon/bar.svg'},
    {text: 'Explore',  cssclass: 'nav-icon', action: '/explore', imagesrc: '/assets/img/nav-icon/travel.svg',
    children:
        [
            {text: 'Casco Viejo',  cssclass: 'sub-nav-icon', action: '/explore#Casco', imagesrc: '/assets/img/nav-icon/casco-viejo.svg'},
            {text: 'Around Town',  cssclass: 'sub-nav-icon', action: '/explore#Around', imagesrc: '/assets/img/nav-icon/around-town.svg'},            
            {text: 'Nearby',  cssclass: 'sub-nav-icon', action: '/explore#Nearby', imagesrc: '/assets/img/nav-icon/nearby.svg'}, 
            {text: 'Beyond',  cssclass: 'sub-nav-icon', action: '/explore#Beyond', imagesrc: '/assets/img/nav-icon/beyond.svg'} 
        ]
    }];

@Injectable()
export class topNavService {
    getNavItems(): NavItems[] {
        return navItems;
    }
}
