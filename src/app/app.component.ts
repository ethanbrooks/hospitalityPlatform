import { Component, HostBinding, OnInit } from '@angular/core';
import {  ScreenService, EchoService } from './_services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }
  public response: Observable<any>;

  constructor(
    private echoService: EchoService,
//    private authService: AuthService,
    private screen: ScreenService,
//    public appInfo: AppInfoService
    ) { }

    public ngOnInit(): void {
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
