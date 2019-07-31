import { Component, ViewChild, HostListener, AfterViewInit, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { TopNavService, NavItems, PortalType } from './topnav.service';


@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.css'],
    providers: [TopNavService]
})
export class TopnavComponent implements AfterViewInit {
@ViewChild('navbar', {static: false}) navbar: ElementRef;
// @HostListener('window:scroll', ['$event'])
    navBarData: NavItems[];
    listData: any[];
    currentData: any;

    items: any[];
    portalTypes: PortalType[];

    header: any;
    sticky: any;

    ngAfterViewInit() {
            // Get the header
    this.header = document.getElementById('header');

    // Get the offset position of the navbar
    this.sticky = this.header.offsetTop;

    }

    onScroll(event) {
        console.log(event);
        if (window.pageYOffset > this.sticky) {
            console.log('add sticky');
            this.header.classList.add('sticky');
        } else {
            console.log('remove sticky');
            this.header.classList.remove('sticky');
        }
        return window.innerWidth;
    }

    constructor(
        topNavService: TopNavService,
        private router: Router
    ) {
        this.navBarData = topNavService.getNavItems();

        this.portalTypes = topNavService.getPortalsTypes();



        this.items = [{
            widget: 'dxButton',
            locateInMenu: 'never',
            location: 'before',
            cssClass: 'nav-text',
            options: {
                onClick: () => {
                    console.log('Back button has been clicked!');
                },
                template: () => {
                    return 'THE<i style="text-transform: lowercase;">lounge</i>';
                }
            }
        },
        {
            widget: 'dxButton',
            locateInMenu: 'never',
            location: 'before',
            cssClass: 'nav-text',
            options: {
                onClick: () => {
                    console.log('Back button has been clicked!');
                },
                template: () => {
                    return 'THE<i style="text-transform: lowercase;">lounge</i>';
                }
            }
        },
        {
            location: 'center',
            locateInMenu: 'never',
            html: '<img src="/assets/img/nav-icon/logo.svg">',
            cssClass: 'nav-icon'
        },
        {
            widget: 'dxButton',
            location: 'after',
            locateInMenu: 'never',
            cssClass: 'nav-text',
            options: {
                onClick: () => {
                    console.log('Back button has been clicked!');
                },
                template: () => {
                    return 'THE<i style="text-transform: lowercase;">lounge</i>';
                }
            }
        },
        {
            widget: 'dxButton',
            location: 'after',
            locateInMenu: 'never',
            cssClass: 'nav-text',
            options: {
                onClick: () => {
                    console.log('Back button has been clicked!');
                },
                template: () => {
                    return 'THE<i style="text-transform: lowercase;">lounge</i>';
                },

            }
        },
        {
            location: 'before',
            locateInMenu: 'always',
            text: 'Contact'
        },
        {
            location: 'before',
            locateInMenu: 'always',
            text: 'Jobs'
        },
        {
            location: 'before',
            locateInMenu: 'always',
            text: 'Explore'
        },
        {
            location: 'after',
            widget: 'dxSelectBox',
            locateInMenu: 'always',
            options: {
                width: 140,
                items: this.portalTypes,
                valueExpr: 'id',
                displayExpr: 'text',
                value: this.portalTypes[0].id,
                onValueChanged: (args) => {
                    console.log(args);
                }
            }
        }];
    }

actionItem(e) {
      this.currentData = this.navBarData[e.itemIndex];
      this.router.navigateByUrl(this.currentData.action);
//        window.location.href = this.currentData.action;
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


}
