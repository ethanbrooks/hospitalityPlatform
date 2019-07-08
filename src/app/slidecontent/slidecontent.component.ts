import { Component, Pipe, PipeTransform  } from '@angular/core';
import { DxMultiViewModule, DxCheckBoxModule, DxTemplateModule } from 'devextreme-angular';
import { Package, slidecontentService  } from './slidecontent.service';

@Component({
    selector: 'app-slidecontent',
    templateUrl: './slidecontent.component.html',
    styleUrls: ['./slidecontent.component.css'],
    providers: [slidecontentService]
})

export class SlidecontentComponent {
    packages: Package[];
    itemCount: number;  

    constructor(serviceSlidecontent: slidecontentService) {
        this.packages = serviceSlidecontent.getPackages();
        this.itemCount = this.packages.length;
    }
}