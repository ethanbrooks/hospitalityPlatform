import { Injectable } from '@angular/core';

export class ProductType {
    id: number;
    text: string;
}

export class Product {
    text: string;
    type: number;
}

const productTypes: ProductType[] = [{
    id: 1,
    text: 'All'
}, {
    id: 2,
    text: 'Video Players'
}, {
    id: 3,
    text: 'Televisions'
}, {
    id: 4,
    text: 'Monitors'
}, {
    id: 5,
    text: 'Projectors'
}];

const products: Product[] = [{
    text: 'HD Video Player',
    type: 2
}, {
    text: 'SuperHD Video Player',
    type: 2
}, {
    text: 'SuperLCD 42',
    type: 3
}, {
    text: 'SuperLED 42',
    type: 3
}, {
    text: 'SuperLED 50',
    type: 3
}, {
    text: 'SuperLCD 55',
    type: 3
}, {
    text: 'DesktopLCD 19',
    type: 4
}, {
    text: 'DesktopLCD 21',
    type: 4
}, {
    text: 'DesktopLED 21',
    type: 4
}, {
    text: 'Projector Plus',
    type: 5
}, {
    text: 'Projector PlusHD',
    type: 5
}];


@Injectable()
export class Service {
    getProductTypes(): ProductType[] {
        return productTypes;
    }
    getProducts(): Product[] {
        return products;
    }
}

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
