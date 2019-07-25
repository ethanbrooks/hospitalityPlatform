import { Component, ViewChild, HostListener, AfterViewInit, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { NavItems, TopNavService, ProductType, Product, Service } from './topnav.service';



import DataSource from 'devextreme/data/data_source';
import notify from 'devextreme/ui/notify';


@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.css'],
    providers: [TopNavService, Service]
})

export class TopnavComponent implements AfterViewInit {
@ViewChild('navbar', {static: false}) navbar: ElementRef;
// @HostListener('window:scroll', ['$event'])
    navBarData: NavItems[];
    listData: any[];
    currentData: any;

    items: any[];
    productTypes: ProductType[];
    productsStore: any;

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
        service: Service,
        topNavService: TopNavService,
        private router: Router
    ) {
        this.navBarData = topNavService.getNavItems();

        const products = service.getProducts();
        this.productTypes = service.getProductTypes();

        this.productsStore = new DataSource(products);
        this.items = [
            {
                location: 'before',
                locateInMenu: 'never',
                template: () => {
                    return '<span class="nav-text">THE<i style="text-transform: lowercase;">hotel</i></span>';
                }
            }, {
                location: 'before',
                locateInMenu: 'never',
                template: () => {
                    return '<span class="nav-text">THE<i style="text-transform: lowercase;">resturant</i></span>';
                }
            },
            {
                location: 'after',
                locateInMenu: 'never',
                template: () => {
                    return '<span class="nav-text">THE<i style="text-transform: lowercase;">lounge</i></span>';
                }
            },
            {
                location: 'after',
                locateInMenu: 'never',
                template: () => {
                    return '<span class="nav-text">THE<i style="text-transform: lowercase;">cellar</i></span>';
                }
            },
            {
                location: 'center',
                locateInMenu: 'never',
                template: () => {
                    return '<img class="nav-icon" src="/assets/img/nav-icon/logo.svg">';
                }
            },
            {
                location: 'after',
                widget: 'dxSelectBox',
                locateInMenu: 'always',
                options: {
                    width: 140,
                    items: this.productTypes,
                    valueExpr: 'id',
                    displayExpr: 'text',
                    value: this.productTypes[0].id,
                    onValueChanged: (args) => {
                        if (args.value > 1) {
                            this.productsStore.filter('type', '=', args.value);
                        } else {
                            this.productsStore.filter(null);
                        }
                        this.productsStore.load();
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
