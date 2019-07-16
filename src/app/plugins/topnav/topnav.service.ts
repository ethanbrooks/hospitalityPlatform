import { Injectable } from '@angular/core';

export class NavItems {
    text?: string;
    textb?: string;
    cssclass: string;
    imageSrc?: string;
    action: string;
    badge?: string;
    children?: Array<NavItems>;
}

const navItems: NavItems[] = [
    {cssclass: 'nav-icon', action: '/', imageSrc: '/assets/img/nav-icon/logo.svg'},
    {text: 'THE', textb: 'hotel', cssclass: 'nav-text', action: '/the-hotel'}, // , imageSrc: '/assets/img/nav-icon/hotel.svg'
    {text: 'THE', textb: 'restaurant', cssclass: 'nav-text', action: '/the-restaurant'}, // , imageSrc:'/assets/img/nav-icon/restaurant.svg'
    {text: 'THE', textb: 'lounge',  cssclass: 'nav-text', action: '/the-lounge'}, // , imageSrc:'/assets/img/nav-icon/bar.svg'
    {text: 'THE', textb: 'cellar',  cssclass: 'nav-text', action: '/the-lounge'}, // , imageSrc:'/assets/img/nav-icon/bar.svg'
    {cssclass: 'nav-icon', action: '/explore', imageSrc: '/assets/img/nav-icon/travel.svg',
    children:
        [
            {text: 'Casco Viejo',  cssclass: 'sub-nav-icon', action: '/explore#Casco'},
            {text: 'Around Town',  cssclass: 'sub-nav-icon', action: '/explore#Around'},
            {text: 'Nearby',  cssclass: 'sub-nav-icon', action: '/explore#Nearby'},
            {text: 'Beyond',  cssclass: 'sub-nav-icon', action: '/explore#Beyond'}
        ]
    },
    {cssclass: 'nav-icon',  action: '/contact', imageSrc: '/assets/img/nav-icon/contact.svg'},
    {cssclass: 'nav-icon',  action: '/jobs', imageSrc: '/assets/img/nav-icon/job.svg'}, // , badge:'New'
//   {cssclass: 'nav-icon', action: '/guest', imageSrc: '/assets/img/nav-icon/guest.svg'}
];

@Injectable()
export class TopNavService {
    getNavItems(): NavItems[] {
        return navItems;
    }
}
