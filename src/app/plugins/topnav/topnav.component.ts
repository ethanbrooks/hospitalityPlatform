import { Component, ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { NavItems, TopNavService } from './topnav.service';


@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.css'],
    providers: [TopNavService]
})

export class TopnavComponent {
@ViewChild('navbar', {static: false}) navbar: ElementRef;
    navBarData: NavItems[];
    listData: any[];
    currentData: any;

    constructor(
      service: TopNavService,
      private router: Router
    ) {
      this.navBarData = service.getNavItems();
    }

    actionItem(e) {
      this.currentData = this.navBarData[e.itemIndex];
      this.router.navigateByUrl(this.currentData.action);
//        window.location.href = this.currentData.action;
    }
  }
/*
 * This is wonkey
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
          if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
          } else {
            document.getElementById("navbar").style.top = "-190px";
          }
          prevScrollpos = currentScrollPos;
        }
    }
 */
