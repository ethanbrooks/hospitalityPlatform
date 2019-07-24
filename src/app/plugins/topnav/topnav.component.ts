import { Component, ViewChild, ElementRef  } from '@angular/core';
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

export class TopnavComponent {
@ViewChild('navbar', {static: false}) navbar: ElementRef;
    navBarData: NavItems[];
    listData: any[];
    currentData: any;

    items: any[];
    productTypes: ProductType[];
    productsStore: any;

    constructor(
      service: Service,
      topNavService: TopNavService,
      private router: Router
      ) {
        this.navBarData = topNavService.getNavItems();

        const products = service.getProducts();
        this.productTypes = service.getProductTypes();

        this.productsStore = new DataSource(products);
        this.items = [{
            location: 'before',
            widget: 'dxButton',
            options: {
                type: 'back',
                text: 'Back',
                onClick: () => {
                    notify('Back button has been clicked!');
                }
            }
        }, {
            location: 'before',
            widget: 'dxButton',
            locateInMenu: 'auto',
            options: {
                icon: 'refresh',
                onClick: () => {
                    notify('Refresh button has been clicked!');
                }
            }
        }, {
            location: 'center',
            locateInMenu: 'never',
            template: () => {
                return '<div class=\'toolbar-label\'><b>Tom\'s Club</b> Products</div>';
            }
        }, {
            location: 'after',
            widget: 'dxSelectBox',
            locateInMenu: 'auto',
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
        }, {
            location: 'after',
            widget: 'dxButton',
            locateInMenu: 'auto',
            options: {
                icon: 'plus',
                onClick: () => {
                    notify('Add button has been clicked!');
                }
            }
        }, {
            locateInMenu: 'always',
            text: 'Save',
            onClick: () => {
                notify('Save option has been clicked!');
            }
        }, {
            locateInMenu: 'always',
            text: 'Print',
            onClick: () => {
                notify('Print option has been clicked!');
            }
        }, {
            locateInMenu: 'always',
            text: 'Settings',
            onClick: () => {
                notify('Settings option has been clicked!');
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
