import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';
import { Order, invoiceService } from './invoice.service';

@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.css'],
    providers: [invoiceService]
})

export class InvoiceComponent {
 
    orders: Order[];

    constructor(private serviceInvoice: invoiceService) {
        this.orders = serviceInvoice.getOrders()
    }

}