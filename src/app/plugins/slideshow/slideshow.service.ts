import { Injectable } from '@angular/core';

export class Item {
  ImageSrc: string;
  Subject?: string;
  Description?: string;
  Tags: Array<string>;
}

const items: Item[] = [
  {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/drink_42816426.jpg',
    Tags: ['drink']
  }, {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/drink_43169803.jpg',
    Tags: ['drink']
  }, {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/drink_43879125.jpg',
    Tags: ['drink']
  }, {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/drink_44324951.jpg',
    Tags: ['drink']
  }, {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/drink_44356082.jpg',
    Tags: ['drink']
  }, {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/drink_44874527.jpg',
    Tags: ['drink']
  }, {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/drink_44930460.jpg',
    Tags: ['drink']
  }, {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/drink_45345732.jpg',
    Tags: ['drink']
  }, {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/drink_46039172.png',
    Tags: ['drink']
  }, {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/drink_46387251.png',
    Tags: ['drink']
  }, {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/drink_46900453.jpg',
    Tags: ['drink']
  }, {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/drink_48195656.jpg',
    Tags: ['drink']
  }, {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/drink_48329396.jpg',
    Tags: ['drink']
  }, {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/drink_48957945.jpg',
    Tags: ['drink']
  }, {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/event_52809899.jpg',
    Tags: ['event']
  }, {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/lounge_48178698.jpg',
    Tags: ['lounge']
  }, {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/people_44930617.jpg',
    Tags: ['people']
  }, {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/people_48911412.jpg',
    Tags: ['people']
  }, {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/people_48928889.jpg',
    Tags: ['people']
  }, {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/people_50986164.jpg',
    Tags: ['people']
  }, {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/people_51146937.jpg',
    Tags: ['people']
  }, {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/staff_46087496.jpg',
    Tags: ['staff']
  }, {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/staff_46088890.jpg',
    Tags: ['staff']
  }, {
    ImageSrc: 'https://beta.hotelherrera.com/image-src/fit-in/640x480/staff_51446499.jpg',
    Tags: ['staff']
  }
];

@Injectable()
export class SlideshowService {
    getItems(): Item[] {
        return items;
    }
}
