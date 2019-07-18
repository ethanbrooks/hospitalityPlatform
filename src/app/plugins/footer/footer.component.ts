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
    action(e) {
//        window.scrollTo(0, 0);
//        console.log(e);
    }
}
