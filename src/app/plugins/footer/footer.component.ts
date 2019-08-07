import { Component } from '@angular/core';


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    providers: []
})

export class FooterComponent {
    listData: any[];
    currentData: any;
    action(e): void {
        console.log('Global');
    }
}
