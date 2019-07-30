import { Component, HostBinding } from '@angular/core';
import {  ScreenService } from './_services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(
//    private authService: AuthService, 
    private screen: ScreenService, 
//    public appInfo: AppInfoService
    ) { }
    
    screenTest(width) {
        return ( width < 700 ) ? 'sm' : 'lg';
    }
    /*
    isAutorized() {
        return this.authService.isLoggedIn;
    }
*/
}
