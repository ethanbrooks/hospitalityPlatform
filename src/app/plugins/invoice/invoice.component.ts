import { Component } from '@angular/core';
import { Order, InvoiceService } from './invoice.service';

@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.css'],
    providers: [InvoiceService]
})

export class InvoiceComponent {
    orders: Order[];

    constructor(private serviceInvoice: InvoiceService) {
        this.orders = this.serviceInvoice.getOrders();
    }

}
