import { Component  } from '@angular/core';
import { Package, SlidecontentService  } from './slidecontent.service';

@Component({
    selector: 'app-slidecontent',
    templateUrl: './slidecontent.component.html',
    styleUrls: ['./slidecontent.component.css'],
    providers: [SlidecontentService]
})

export class SlidecontentComponent {
    packages: Package[];
    itemCount: number;

    constructor(serviceSlidecontent: SlidecontentService) {
        this.packages = serviceSlidecontent.getPackages();
        this.itemCount = this.packages.length;
    }
}
