import { Component, HostListener, ContentChild } from '@angular/core';
import { Router } from '@angular/router';
import themes from 'devextreme/ui/themes';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: []
  })

export class AppComponent {

    constructor(
        private router: Router,
    ) {
        themes.current('dx.material.custom-scheme');
    }

    screen(width) {
        return ( width < 700 ) ? 'sm' : 'lg';
    }
}
