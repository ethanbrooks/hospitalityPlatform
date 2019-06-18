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
	"Description": "With a reputation as a “heaven on earth,” Playa Venao, Panama has transformed from a wild beach town to a go-to destination. Stretches of white sand, candy-colored houses, and a surfer-bohemian vibe make this the perfect setting for seekers of tranquility and bliss. Venao is one of the best places to surf in Panama with waves for every level of skill. This town wakes up early to make the most of the surf breaks, and the beaches get busier throughout the day. Need a break from the sand? Venture inland for a canopy tour of Cañas in the Azuero peninsula, or, head off the coast to explore the Isla Iguana or go fishing off Isla Cañas. Looking for wellness activities? After a day in the sun, recharge with a wellness workshop or tropical cocktail at The Playground. Yoga is always a popular activity. Try one of our yoga classes or mindfulness sessions. Here, like all of our locations, we go out of our way to help you experience all the awesome activities Venao has to offer. Whether you want to zipline through the jungle or explore the hidden islands of Venao we’ve got you covered.",
	"Subject": "Cycle • Kayak • Landmark Tours • Dive • Go Boating",
	"Media": [{
		"Type":"image",
		"Url":"https://res.cloudinary.com/selina/image/upload/c_scale,f_auto,q_auto:good,w_2560/v1/s-cf-1/xdw7oj4u3s4v/3tZ9mJbOFqkAaG4SMagssi/6db0d61bb7092ff6e4bc22fa65d44258/Selina_Santa_Teresa_Explore_Silder_Hero_001.jpg",
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
	"Description": "Great stuff",
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
	"Description": "Great stuff",
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
	"Description": "Great stuff",
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
