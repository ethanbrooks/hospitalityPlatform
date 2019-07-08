import { Injectable } from '@angular/core';

export class Media {
	Type:string;
	Url:string;
	Caption:string;
}

export class Package {
    ID: number;
	CompanyName: string;
	PackageName: string;
	Location: string;
	Description: string;
	Subject: string;
	Media: Array<Media>;
    Email: string;
    Phone: string;
    Fax: string;
    Website: string;
}

let packages: Package[] = [{
    "ID": 1,
	"CompanyName": "SELINA",
	"PackageName": "Playa Venao",
	"Location": "Panamá",
	"Description": "With a reputation as a “heaven on earth,” Playa Venao, Panama has transformed from a wild beach town to a go-to destination. Stretches of white sand, candy-colored houses, and a surfer-bohemian vibe make this the perfect setting for seekers of tranquility and bliss. Venao is one of the best places to surf in Panama with waves for every level of skill. This town wakes up early to make the most of the surf breaks, and the beaches get busier throughout the day. Need a break from the sand? Venture inland for a canopy tour of Cañas in the Azuero peninsula, or, head off the coast to explore the Isla Iguana or go fishing off Isla Cañas. Looking for wellness activities? After a day in the sun, recharge with.",
	"Subject": "Cycle • Kayak • Landmark Tours • Dive • Go Boating",
	"Media": [{
		"Type":"image",
		"Url":"/assets/img/explore/Selina_Santa_Teresa_Explore_Silder_Hero_001.webp",
		"Caption":"cool stuff"
		}
	],
    "Email": "test@selina.com,",
    "Phone": "(800) 555-2797",
    "Fax": "(800) 555-2171",
    "Website": "http://www.nowebsitesupermart.com"
}, {
    "ID": 2,
    "CompanyName": "El'Depot",
	"PackageName": "Fun Trip",
	"Location": "Panama",
	"Description": "Great stuffWith a reputation as a “heaven on earth,” Playa Venao, Panama has transformed from a wild beach town to a go-to destination. Stretches of white sand, candy-colored houses, and a surfer-bohemian vibe make this the perfect setting for seekers of tranquility and bliss. Venao is one of the best places to surf in Panama with waves for every level of skill. This town wakes up early to make the most of the surf breaks, and the beaches get busier throughout the day. Need a break from the sand? Venture inland for a canopy tour of Cañas in the Azuero peninsula, or, head off the coast to explore the Isla Iguana or go fishing off Isla Cañas. Looking for wellness activities? After a day in the sun, recharge with.",
	"Subject": "Even better",
	"Media": [{
		"Type":"png",
		"Url":"http://dfadsf.com/asfads.png",
		"Caption":"cool stuff"
		}
	],
    "Email": "test@bla.com,",
    "Phone": "(800) 595-3232",
    "Fax": "(800) 595-3231",
    "Website": "http://www.nowebsitedepot.com"
}, {
    "ID": 3,
    "CompanyName": "K&S Music",
	"PackageName": "Fun Trip",
	"Location": "Panama",
	"Description": "Great stuffWith a reputation as a “heaven on earth,” Playa Venao, Panama has transformed from a wild beach town to a go-to destination. Stretches of white sand, candy-colored houses, and a surfer-bohemian vibe make this the perfect setting for seekers of tranquility and bliss. Venao is one of the best places to surf in Panama with waves for every level of skill. This town wakes up early to make the most of the surf breaks, and the beaches get busier throughout the day. Need a break from the sand? Venture inland for a canopy tour of Cañas in the Azuero peninsula, or, head off the coast to explore the Isla Iguana or go fishing off Isla Cañas. Looking for wellness activities? After a day in the sun, recharge with.",
	"Subject": "Even better",
	"Media": [{
		"Type":"png",
		"Url":"http://dfadsf.com/asfads.png",
		"Caption":"cool stuff"
		}
	],
    "Email": "test@bla.com,",
    "Phone": "(612) 304-6073",
    "Fax": "(612) 304-6074",
    "Website": "http://www.nowebsitemusic.com"
}, {
    "ID": 4,
    "CompanyName": "Tom Club",
	"PackageName": "Fun Trip",
	"Location": "Panama",
	"Description": "Great stuffWith a reputation as a “heaven on earth,” Playa Venao, Panama has transformed from a wild beach town to a go-to destination. Stretches of white sand, candy-colored houses, and a surfer-bohemian vibe make this the perfect setting for seekers of tranquility and bliss. Venao is one of the best places to surf in Panama with waves for every level of skill. This town wakes up early to make the most of the surf breaks, and the beaches get busier throughout the day. Need a break from the sand? Venture inland for a canopy tour of Cañas in the Azuero peninsula, or, head off the coast to explore the Isla Iguana or go fishing off Isla Cañas. Looking for wellness activities? After a day in the sun, recharge with.",
	"Subject": "Even better",
	"Media": [{
		"Type":"png",
		"Url":"http://dfadsf.com/asfads.png",
		"Caption":"cool stuff"
		}
	],
    "Email": "test@bla.com,",
    "Phone": "(800) 955-2292",
    "Fax": "(800) 955-2293",
    "Website": "http://www.nowebsitetomsclub.com"
}];

@Injectable()
export class slidecontentService {
    getPackages(): Package[] {
        return packages;
    }
}
