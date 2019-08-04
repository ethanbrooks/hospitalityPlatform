
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import videojs from 'video.js';
// import 'videojs-overlay';
// import 'videojs-playlist';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: [
    './video.component.css',
    './video-js.css'
  ]
})

export class VideoComponent implements AfterViewInit {
  @ViewChild('myvid', {static: false}) vid: ElementRef;
  public async: any;

  ngAfterViewInit() {
    const options = {
      controls: true,
      fluid: true,
      muted: true,
      loop: false,
      preload: 'auto',
      techOrder: ['html5'],
    };

    const player = new videojs('myvid', options, function onPlayerReady() {
     /* player.overlay({
        content: 'This is the default.',
        align: 'top-right',
        class: 'big-red',
        overlays: [{
          content: 'It is playing now',
          align: 'top-left',
          class: 'little-green',
          start: 'play',
          end: 'pause'
        }]
      });
*/
      player.src([
        {
          type: 'application/x-mpegURL',
//          src: 'https://beta.hotelherrera.com/dash/SampleVideo1280x7201mb.mpd'
          src: 'https://beta.hotelherrera.com/hls/SampleVideo1280x7201mb.m3u8'
        }
      ]);
      const promise = player.play();
      if (promise !== undefined) {
        promise.then(() => {
          console.log('Autoplay started!');
          document.getElementById('videocontent').style.display = 'block';
          document.getElementById('must-click').style.display = 'none';
        }).catch((error) => {

          const d = new Date();
          const time = d.getTime();
          console.log('Autoplay was prevented at', time );
        });
      }
  });
}

/*
    player.playlist([{
      sources: [{
        type: 'application/x-mpegURL',
        src: 'https://hotel-herrera.s3.amazonaws.com/assets/video/hls/LogoFull_1/stream.m3u8'
      }],
      poster: 'http://media.w3.org/2010/05/sintel/poster.png'
    }, {
      sources: [{
        type: 'application/x-mpegURL',
        src: 'https://hotel-herrera.s3.amazonaws.com/assets/video/hls/HERRERA_1/stream.m3u8'
      }],
      poster: 'http://media.w3.org/2010/05/bunny/poster.png'
    }]);
*/
}
