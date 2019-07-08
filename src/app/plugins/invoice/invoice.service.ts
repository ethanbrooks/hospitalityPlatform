import { Injectable } from '@angular/core';
export class Rec {

}
export class Order {
    ID: number;
    OrderNumber: number;
    OrderDate: string;
    SaleAmount: number;
    TaxAmount: number;
    GratuityAmount: number;
    Receipt: string;
    Service: string;
    Employee: string;
}

let orders: Order[] = [{
    "ID" : 1,
    "OrderNumber" : 35703,
    "OrderDate" : "2019-05-13 12:31 AM",
    "SaleAmount" : 11.23,
    "TaxAmount" : 1.23,
    "GratuityAmount": 5.00,
    "Receipt": "/bla/b2341",
    "Service": "Concierge",
    "Employee" : "Harv Mudd"
}, {
    "ID" : 4,
    "OrderNumber" : 35711,
    "OrderDate" : "2019-05-13 12:31 AM",
    "SaleAmount" : 16.050,
    "TaxAmount" : 2.175,
    "GratuityAmount": 3.22,
    "Receipt": "/bla/b2341",
    "Service": "Room Service",
    "Employee" : "Jim Packard"
}, {
    "ID" : 5,
    "OrderNumber" : 35714,
    "OrderDate" : "2019-05-13 12:31 AM",
    "SaleAmount" : 14.50,
    "TaxAmount" : 2.50,
    "GratuityAmount": 1.22,
    "Receipt": "/bla/b2341",
    "Service": "Concierge",
    "Employee" : "Harv Mudd"
}, {
    "ID" : 7,
    "OrderNumber" : 35983,
    "OrderDate" : "2019-05-13 12:31 AM",
    "SaleAmount" : 37.25,
    "TaxAmount" : 3.85,
    "GratuityAmount": 1.22,
    "Receipt": "/bla/b2341",
    "Service": "Room Service",
    "Employee" : "Jim Packard"
}, {
    "ID" : 9,
    "OrderNumber" : 36987,
    "OrderDate" : "2019-05-13 12:31 AM",
    "SaleAmount" : 142.00,
    "TaxAmount" : 14.80,
    "GratuityAmount": 1.22,
    "Receipt": "/bla/b2341",
    "Service": "Room Service",
    "Employee" : "Clark Morgan"
}, {
    "ID" : 11,
    "OrderNumber" : 38466,
    "OrderDate" : "2019-05-13 12:31 AM",
    "SaleAmount" : 78.00,
    "TaxAmount" : 8.20,
    "GratuityAmount": 3.22,
    "Receipt": "/bla/b2341",
    "Service": "Concierge",
    "Employee" : "Harv Mudd"
}, {
    "ID" : 15,
    "OrderNumber" : 39874,
    "OrderDate" : "2019-05-13 12:31 AM",
    "SaleAmount" : 90.50,
    "TaxAmount" : 11.00,
    "GratuityAmount": 13.22,
    "Receipt": "/bla/b2341",
    "Service": "Concierge",
    "Employee" : "Harv Mudd"
}, {
    "ID" : 18,
    "OrderNumber" : 42847,
    "OrderDate" : "2019-05-13 12:31 AM",
    "SaleAmount" : 24.00,
    "TaxAmount" : 2.80,
    "GratuityAmount": 1.22,
    "Receipt": "/bla/b2341",
    "Service": "Martini Bar",
    "Employee" : "Todd Hoffman"
}, {
    "ID" : 19,
    "OrderNumber" : 43982,
    "OrderDate" : "2019-05-13 12:31 AM",
    "SaleAmount" : 60.50,
    "TaxAmount" : 6.50,
    "GratuityAmount": 1.32,
    "Receipt": "/bla/b2341",
    "Service": "Martini Bar",
    "Employee" : "Clark Morgan"
}, {
    "ID" : 29,
    "OrderNumber" : 56272,
    "OrderDate" : "2019-05-13 12:31 AM",
    "SaleAmount" : 18.50,
    "TaxAmount" : 16.50,
    "GratuityAmount": 1.22,
    "Receipt": "/bla/b2341",
    "Service": "Dinning",
    "Employee" : "Clark Morgan"
}, {
    "ID" : 30,
    "OrderNumber" : 57429,
    "OrderDate" : "2019-05-13 12:31 AM",
    "SaleAmount" : 11.50,
    "TaxAmount" : 1.00,
    "GratuityAmount": 1.22,
    "Receipt": "/bla/b2341",
    "Service": "Dinning",
    "Employee" : "Clark Morgan"
}, {
    "ID" : 32,
    "OrderNumber" : 58292,
    "OrderDate" : "2019-05-13 12:31 AM",
    "SaleAmount" : 135.00,
    "TaxAmount" : 13.00,
    "GratuityAmount": 1.32,
    "Receipt": "/bla/b2341",
    "Service": "Main Bar",
    "Employee" : "Harv Mudd"
}];

@Injectable()
export class invoiceService {
    getOrders() {
        return orders;
    }
}
