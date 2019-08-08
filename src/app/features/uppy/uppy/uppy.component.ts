import { Component, OnInit, AfterViewInit, ViewEncapsulation, Input, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import * as Core from '@uppy/core';

import { UppyService } from '../uppy.service';
import { v4 } from 'uuid';

export enum UppyPlugins {
  AwsS3Multipart,
  Webcam
}



export type UppyPluginConfigurations = [
  string,
  any
][];

@Component({
  selector: 'app-uppy',
  templateUrl: './uppy.component.html',
//  styleUrls: ['./uppy.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UppyComponent implements AfterViewInit {
  @Input() plugins: UppyPluginConfigurations = [];
  @Input() on: Subject<[string, any, any, any]>;

  uuid = v4();

  constructor(public uppyService: UppyService) {
  }

  ngAfterViewInit() {
    const uppyInstance = this.uppyService.configure(this.plugins, this.uuid);

    const events = ['file-added', 'file-removed', 'upload', 'upload-progress', 'upload-success', 'complete', 'upload-error', 'info-visible', 'info-hidden'];

    events.forEach(ev => uppyInstance.on(ev, (data1, data2, data3) => {
      this.on.next([ev, data1, data2, data3]);
    }));
  }
}
