import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})

/*
~/Documents/Bento4-SDK-1-5-1-628.universal-apple-macosx/bin/mp42hls ~/Downloads/BigBuckBunny_320x180.mp4
mp4hls --encryption-key baab6d0dd153762d945d5a060abb5fcd --output-encryption-key ~/Downloads/BigBuckBunny_320x180.mp4
*/
export class VideoComponent implements AfterViewInit {
  @ViewChild('myvid') vid: ElementRef;
  public async: any;

  ngAfterViewInit() {
    const options = {
      controls: false,
      fluid: true,
      muted: true,
      loop: true, 
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

    player.src([
        {type: "video/mp4", src:"https://s3.amazonaws.com/hh-video/LogoFull_1.mp4"}
    ]);
    
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
