import { Injectable } from '@angular/core';

export class Item {
	ImageSrc: string;
	Subject?: string;
	Description?: string;
	Tags: Array<string>;
}

let items: Item[] = [
	{
		ImageSrc: "/assets/img/slideshow/drink_42816426.jpg",
		Tags: ["drink"]
	}, {
		ImageSrc: "/assets/img/slideshow/drink_43169803.jpg",
		Tags: ["drink"]
	}, {
		ImageSrc: "/assets/img/slideshow/drink_43879125.jpg",
		Tags: ["drink"]
	}, {
		ImageSrc: "/assets/img/slideshow/drink_44324951.jpg",
		Tags: ["drink"]
	}, {
		ImageSrc: "/assets/img/slideshow/drink_44356082.jpg",
		Tags: ["drink"]
	}, {
		ImageSrc: "/assets/img/slideshow/drink_44874527.jpg",
		Tags: ["drink"]
	}, {
		ImageSrc: "/assets/img/slideshow/drink_44930460.jpg",
		Tags: ["drink"]
	}, {
		ImageSrc: "/assets/img/slideshow/drink_45345732.jpg",
		Tags: ["drink"]
	}, {
		ImageSrc: "/assets/img/slideshow/drink_46039172.png",
		Tags: ["drink"]
	}, {
		ImageSrc: "/assets/img/slideshow/drink_46387251.png",
		Tags: ["drink"]
	}, {
		ImageSrc: "/assets/img/slideshow/drink_46900453.jpg",
		Tags: ["drink"]
	}, {
		ImageSrc: "/assets/img/slideshow/drink_48195656.jpg",
		Tags: ["drink"]
	}, {
		ImageSrc: "/assets/img/slideshow/drink_48329396.jpg",
		Tags: ["drink"]
	}, {
		ImageSrc: "/assets/img/slideshow/drink_48957945.jpg",
		Tags: ["drink"]
	}, {
		ImageSrc: "/assets/img/slideshow/event_52809899.jpg",
		Tags: ["event"]
	}, {
		ImageSrc: "/assets/img/slideshow/lounge_48178698.jpg",
		Tags: ["lounge"]
	}, {
		ImageSrc: "/assets/img/slideshow/people_44930617.jpg",
		Tags: ["people"]
	}, {
		ImageSrc: "/assets/img/slideshow/people_48911412.jpg",
		Tags: ["people"]
	}, {
		ImageSrc: "/assets/img/slideshow/people_48928889.jpg",
		Tags: ["people"]
	}, {
		ImageSrc: "/assets/img/slideshow/people_50986164.jpg",
		Tags: ["people"]
	}, {
		ImageSrc: "/assets/img/slideshow/people_51146937.jpg",
		Tags: ["people"]
	}, {
		ImageSrc: "/assets/img/slideshow/staff_46087496.jpg",
		Tags: ["staff"]
	}, {
		ImageSrc: "/assets/img/slideshow/staff_46088890.jpg",
		Tags: ["staff"]
	}, {
		ImageSrc: "/assets/img/slideshow/staff_51446499.jpg",
		Tags: ["staff"]
	}
];

@Injectable()
export class slideshowService {
    getItems(): Item[] {
        return items;
    }
}