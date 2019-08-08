import { Component, HostBinding, AfterViewInit } from '@angular/core';

import { SwUpdate } from '@angular/service-worker';

import {  ScreenService, EchoService } from './_services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    SwUpdate
  ]
})
export class AppComponent implements AfterViewInit {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }
  public response: Observable<any>;

  constructor(
    private swUpdateService: SwUpdate,
    private echoService: EchoService,
//    private authService: AuthService,
    private screen: ScreenService,
//    public appInfo: AppInfoService
    ) { }

    public ngAfterViewInit(): void {
      if (this.swUpdateService.isEnabled) {
        this.swUpdateService.available.subscribe(() => {
         /* this.swUpdate
          .activateUpdate()
          .then(() => {
            window.location.reload();
          });*/
            if (confirm('New version available. Load New Version?')) {
                window.location.reload();
            }
        });
      }
      this.response = this.echoService.makeCall();
    }

    screenTest(width) {
        return ( width < 700 ) ? 'sm' : 'lg';
    }
    /*
    isAutorized() {
        return this.authService.isLoggedIn;
    }
*/
}
