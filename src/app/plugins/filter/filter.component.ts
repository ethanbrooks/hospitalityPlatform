import { Component } from '@angular/core';


import DataSource from 'devextreme/data/data_source';
import { Service } from './filter.service';


const getOrderDay = (rowData: any): number => {
    return (new Date(rowData.OrderDate)).getDay();
};

@Component({
    selector: 'app-filter',
    providers: [ Service ],
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})

export class FilterComponent {
    dataSource: any;
    columns: any;
    filterValue: Array<any>;
    customOperations: Array<any>;
    popupPosition: any;
    saleAmountHeaderFilter: any;

    constructor(service: Service) {
        this.dataSource = new DataSource({
            store: service.getOrders()
        });
        this.popupPosition = { of: window, at: 'top', my: 'top', offset: { y: 10 } };
        this.filterValue = [
            ['Employee', '=', 'Clark Morgan'],
            'and',
            ['OrderDate', 'weekends']
        ];
        this.customOperations = [{
            name: 'weekends',
            caption: 'Weekends',
            dataTypes: ['date'],
            icon: 'check',
            hasValue: false,
            calculateFilterExpression() {
                return [[getOrderDay, '=', 0], 'or', [getOrderDay, '=', 6]];
            }
        }];

        this.saleAmountHeaderFilter = [{
            text: 'Less than $3000',
            value: ['SaleAmount', '<', 3000]
        }, {
            text: '$3000 - $5000',
            value: [
                ['SaleAmount', '>=', 3000],
                ['SaleAmount', '<', 5000]
            ]
        }, {
            text: '$5000 - $10000',
            value: [
                ['SaleAmount', '>=', 5000],
                ['SaleAmount', '<', 10000]
            ]
        }, {
            text: '$10000 - $20000',
            value: [
                ['SaleAmount', '>=', 10000],
                ['SaleAmount', '<', 20000]
            ]
        }, {
            text: 'Greater than $20000',
            value: ['SaleAmount', '>=', 20000]
        }];
    }

    onInitialized(e) {
        e.component.columnOption('SaleAmount', {
            editorOptions: {
                format: 'currency',
                showClearButton: true
            }
        });
    }
}
