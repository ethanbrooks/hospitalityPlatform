import { Injectable } from '@angular/core';


export class Contact {
    ID: number;
    ContactName: string;
    Address?: string;
    City?: string;
    State?: string;
    Zipcode?: number;
    Phone?: string;
    AltPhone?: string;
    Fax?: string;
    Email?: string;
    Website?: string;
}

let contacts: Contact[] = [{
    "ID": 1,
    "Address": "Calle 9a Oeste",
    "City":"Panamá",
    "State": "Panamá",
    "ContactName": "Guest Services",
    "Phone": "+1 (800) 595-3232 Ext 12",
    "AltPhone": "+507 6121-2543",
    "Email": "concierge@hotelherera.com",
    "Website": "http://www.hotelherrera.com/guest"
}, {
    "ID": 2,
    "ContactName": "Front desk",
    "Phone": "+1 (800) 595-3232",
    "AltPhone": "+507 6121-2543",
    "Fax": "+507 6121-254",
    "Email": "frontdesk@hotelherera.com",
    "Website": "http://www.hotelherrera.com/the-hotel"
}, {
    "ID": 3,
    "ContactName": "Restaurant",
    "Phone": "+507 304-6073",
    "Fax": "(612) 304-6074",
    "Email": "restaurant@hotelherera.com",
    "Website": "http://www.hotelherrera.com/the-restaurant"
}];

@Injectable()
export class contactService {
    getContacts(): Contact[] {
        return contacts;
    }
}
