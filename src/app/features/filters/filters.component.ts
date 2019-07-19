import { Component } from '@angular/core';
import { Service } from './filters.service';


const anyOfOperation = {
    name: 'anyof',
    caption: 'Is any of',
    icon: 'check',
    editorTemplate: 'tagBoxTemplate',
    calculateFilterExpression(filterValue: any, field: any) {
        return filterValue && filterValue.length
            && Array.prototype.concat.apply([], filterValue.map((value) => {
                return [[field.dataField, '=', value], 'or'];
            })).slice(0, -1);
    }
};

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  providers: [Service]
})
export class FiltersComponent {

    constructor(service: Service) {
        this.fields = service.getFields();
        this.filter = service.getFilter();
        this.categories = service.getCategories();
        this.customOperations = [anyOfOperation];
    }
    filterText: any;
    dataSourceText: any;
    fields: Array<any>;
    customOperations: Array<any>;
    filter: any;
    categories: string[];

    private static formatValue(value, spaces = 0) {
        if (value && Array.isArray(value[0])) {
            const TAB_SIZE = 4;
            spaces = spaces || TAB_SIZE;
            return '[' + FiltersComponent.getLineBreak(spaces) + value.map((item) => {
                return Array.isArray(item[0]) ? FiltersComponent.formatValue(item, spaces + TAB_SIZE) : JSON.stringify(item);
            }).join(',' + FiltersComponent.getLineBreak(spaces)) + FiltersComponent.getLineBreak(spaces - TAB_SIZE) + ']';
        }
        return JSON.stringify(value);
    }

    private static getLineBreak(spaces) {
        return '\r\n' + new Array(spaces + 1).join(' ');
    }

    updateTexts(e) {
        this.filterText = FiltersComponent.formatValue(e.component.option('value'));
        this.dataSourceText = FiltersComponent.formatValue(e.component.getFilterExpression());
    }
}
