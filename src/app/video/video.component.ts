import { Component, Input, AfterViewInit, ContentChild, ElementRef } from '@angular/core';
import videojs from 'video.js';
import 'videojs-playlist';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: [
    './video.component.css',
    './video-js.css'
  ]
})

/*
~/Documents/Bento4-SDK-1-5-1-628.universal-apple-macosx/bin/mp42hls ~/Downloads/BigBuckBunny_320x180.mp4
mp4hls --encryption-key baab6d0dd153762d945d5a060abb5fcd --output-encryption-key ~/Downloads/BigBuckBunny_320x180.mp4
*/
export class VideoComponent implements AfterViewInit {
  @ContentChild('myvid', {static: false}) vid: ElementRef;
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

    let player = new videojs(this.vid.nativeElement, options, function onPlayerReady() {
      //      this.enterFullScreen();
      console.log('Your player is ready!');
      // How about an event listener?
      this.on('ended', function() {
        console.log('Awww...over so soon?!');
      });
    });
    

    player.playlist([{
      sources: [{
        type:"application/x-mpegURL", 
        src:"https://hotel-herrera.s3.amazonaws.com/assets/video/hls/LogoFull_1/stream.m3u8"
      }],
      poster: 'http://media.w3.org/2010/05/sintel/poster.png'
    }, {
      sources: [{
        type:"application/x-mpegURL", 
        src:"https://hotel-herrera.s3.amazonaws.com/assets/video/hls/HERRERA_1/stream.m3u8"  
      }],
      poster: 'http://media.w3.org/2010/05/bunny/poster.png'
    }]);

 
    
    var promise = player.play();    

    if (promise !== undefined) {
      promise.then(function() {
        console.log('Autoplay started!');
        document.getElementById('videocontent').style.display = 'block';
        document.getElementById('must-click').style.display = 'none';              
      }).catch(function(error) {
        var d = new Date();
        var time = d.getTime();
        console.log('Autoplay was prevented at', time );
        var promise = player.play();  
      });
    }
  }
}
