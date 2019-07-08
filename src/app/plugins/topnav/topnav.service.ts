import { Injectable } from '@angular/core';

export class NavItems {
    text: string;
    textb?: string;
    cssclass: string;
    imageSrc?: string;
    action: string;
    badge?: string;
    children?: Array<NavItems>;
}

let navItems: NavItems[] = [
    {text: 'Home', cssclass: 'nav-icon', action: '/', imageSrc: '/assets/img/nav-icon/logo.svg'},
    {text: 'THE', textb:'hotel', cssclass: 'nav-icon', action: '/the-hotel'}, //, imageSrc: '/assets/img/nav-icon/hotel.svg'
    {text: 'THE', textb:'restaurant', cssclass: 'nav-icon', action: '/the-restaurant'}, //, imageSrc:'/assets/img/nav-icon/restaurant.svg'
    {text: 'THE', textb:'lounge',  cssclass: 'nav-icon', action: '/the-lounge'}, //, imageSrc:'/assets/img/nav-icon/bar.svg'
    {text: 'THE', textb:'cellar',  cssclass: 'nav-icon', action: '/the-lounge'}, //, imageSrc:'/assets/img/nav-icon/bar.svg'
    {text: 'Explore',  cssclass: 'nav-icon', action: '/explore', imageSrc: '/assets/img/nav-icon/travel.svg',
    children:
        [
            {text: 'Casco Viejo',  cssclass: 'sub-nav-icon', action: '/explore#Casco'},
            {text: 'Around Town',  cssclass: 'sub-nav-icon', action: '/explore#Around'},            
            {text: 'Nearby',  cssclass: 'sub-nav-icon', action: '/explore#Nearby'}, 
            {text: 'Beyond',  cssclass: 'sub-nav-icon', action: '/explore#Beyond'} 
        ]
    },
    {text: 'Contact', cssclass: 'nav-icon',  action: '/contact', imageSrc: '/assets/img/nav-icon/contact.svg'},
    {text: 'Jobs', cssclass: 'nav-icon',  action: '/jobs', imageSrc: '/assets/img/nav-icon/job.svg'}, //, badge:'New'
    {text: 'Guest',  cssclass: 'nav-icon', action: '/guest', imageSrc: '/assets/img/nav-icon/guest.svg'} 
];

@Injectable()
export class topNavService {
    getNavItems(): NavItems[] {
        return navItems;
    }
}
