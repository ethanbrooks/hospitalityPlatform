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
//    this.header = document.getElementById('header');

    // Get the offset position of the navbar
 //   this.sticky = this.header.offsetTop;

    }

    onScroll(event) {
/*
        console.log(event);
        if (window.pageYOffset > this.sticky) {
            console.log('add sticky');
            this.header.classList.add('sticky');
        } else {
            console.log('remove sticky');
            this.header.classList.remove('sticky');
        }
        return window.innerWidth;
*/
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
                    this.router.navigate(['/the-restaurant']);
                },
                template: () => {
                    return 'THE<i style="text-transform: lowercase;">Restaurant</i>';
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
                    this.router.navigate(['/the-hotel']);
                },
                template: () => {
                    return 'THE<i style="text-transform: lowercase;">hotel</i>';
                }
            }
        },
        {
            widget: 'dxButton',
            location: 'center',
            locateInMenu: 'never',
            cssClass: 'nav-icon',
            options: {
                onClick: () => {
                    this.router.navigate(['/']);
                },
                template: () => {
                    return '<img src="/assets/img/nav-icon/logo.svg">';
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
                    this.router.navigate(['/the-lounge']);
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
                    this.router.navigate(['/the-cellar']);
                },
                template: () => {
                    return 'THE<i style="text-transform: lowercase;">cellar</i>';
                },

            }
        },
        {
            widget: 'dxButton',
            location: 'before',
            locateInMenu: 'always',
            options: {
                text: 'Contact',
                icon: 'assets/img/nav-icon/contact.svg',
                onClick: () => {
                    this.router.navigate(['/contact']);
                }
            }
        },
        {
            widget: 'dxButton',
            location: 'before',
            locateInMenu: 'always',

            options: {
                text: 'Jobs',
                icon: 'assets/img/nav-icon/jobs.svg',
                onClick: () => {
                    this.router.navigate(['/jobs']);
                }
            }
        },
        {
            widget: 'dxButton',
            location: 'before',
            locateInMenu: 'always',
            options: {
                icon: 'assets/img/nav-icon/travel.svg',
                text: 'Explore',
                onClick: () => {
                    this.router.navigate(['/explore']);
                }
            }
        },
        {
            widget: 'dxButton',
            location: 'before',
            locateInMenu: 'always',
            options: {
                icon: 'assets/img/nav-icon/guest.svg',
                text: 'Guest Portal',
                onClick: () => {
                    this.router.navigate(['https://guest.hotelherrera.com']);
                }
            }
        },
        {
            widget: 'dxButton',
            location: 'before',
            locateInMenu: 'always',
            options: {
                icon: 'assets/img/nav-icon/guest.svg',
                text: 'Staff Portal',
                onClick: () => {
                    this.router.navigate(['https://staff.hotelherrera.com']);
                }
            }
        },
        {
            location: 'after',
            widget: 'dxSelectBox',
            locateInMenu: 'always',
            options: {
                width: 140,
                items: [{
                    ID: 'es-PA',
                    Name: 'Panameño Español ',
                    IconSrc: 'assets/img/laguanges/es-PA.svg'
                }, {
                    ID: 'en_US',
                    Name: 'US English',
                    IconSrc: 'assets/img/laguanges/en-US.svg'
                }, {
                    ID: 'fr',
                    Name: 'French',
                    IconSrc: 'assets/img/laguanges/fr.svg'
                }],
                valueExpr: 'ID',
                displayExpr: 'Name'/*(item) => {
                    // "item" can be null
                    return item && '<img src="' + item.IconSrc + '">' + item.Name;
                }*/,
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
