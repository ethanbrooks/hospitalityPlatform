import { Component, Pipe, PipeTransform, HostListener, ChangeDetectionStrategy, OnInit, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DxPopupComponent } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import notify from 'devextreme/ui/notify';
import Popup from 'devextreme/ui/popup';
import { ServiceUpload } from './upload.service';

@Pipe({name: 'time'})
export class TimePipe implements PipeTransform {
    transform(value: number): string {
        return '00:00:' + ('0' + value).slice(-2);
    }
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [ServiceUpload],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UploadComponent implements OnInit {
  @ViewChild(DxPopupComponent, {static: false}) progressUploadPopup: DxPopupComponent;

  messageSubject: string;

  httpProgress: string;
  httpMessage: string;
  httpResponse: string;

  isPopupVisible: boolean;

  loginRules = [{
    type: 'required'
  }];

  filesDataSource: DataSource;
  progressUploadDataSource: any = [{id: 1, name: 'Uploading...', messageId: null}];

  @HostListener('paste', [ '$event' ])
  onPaste(event) {
    event.preventDefault();
    this.serviceUpload.appendQueue(event.clipboardData.files);
  }

  @HostListener('dragover', [ '$event' ])
  @HostListener('dragenter', [ '$event' ])
  onDrag(event) {
    event.preventDefault();
  }
  @HostListener('drop', [ '$event' ])
  onDrop(event) {
    event.preventDefault();
//    console.log('Drop Event in upload: ', event);
    this.serviceUpload.appendQueue(event.dataTransfer.files);
  }


  ngOnInit() {

    this.serviceUpload.httpResponse.subscribe(httpResponse => {
      console.log('httpResponse: ', httpResponse);
      this.progressUploadPopup.visible = false;
      notify(httpResponse, 'error', 1000);
//      let element = document.getElementById("popupUpload");
//      let instance = Popup.getInstance(element) as Popup;
//      instance.hide();
      this.httpResponse = httpResponse;
    });

    this.serviceUpload.httpProgress.subscribe(httpProgress => {
      console.log('httpProgress: ', httpProgress);
      this.httpProgress = httpProgress;
    });

    this.serviceUpload.httpMessage.subscribe(httpMessage => {
      console.log('httpMessage: ', httpMessage);
      this.progressUploadPopup.visible = false;
      const element = document.getElementById('popupUpload');
      const instance = Popup.getInstance(element) as Popup;
      instance.hide();
      this.httpMessage = httpMessage;
    });
  }

  constructor(
    private el: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private serviceUpload: ServiceUpload
  ) {
    this.filesDataSource = new DataSource({
      store: this.serviceUpload.filesStore,
      reshapeOnPush: true
    });
  }

  onFileChange(event) {
    this.serviceUpload.appendQueue(event.target.files);
  }

  startUpload() {
    this.progressUploadPopup.visible = !this.progressUploadPopup.visible;

    this.serviceUpload.upload({
      subject: this.messageSubject,
      text: 'This is an upload of',
      metaData: '{"type":"upload"}'
//      attachments: this.serviceUpload.filesArray
    });
  }

  abortUpload() {
    this.progressUploadPopup.visible = !this.progressUploadPopup.visible;
    notify('Upload has been aborted.', 'warning', 600);
  }

  onToolbarPreparing(event) {
    event.toolbarOptions.items.unshift(
  /*
      {
            location: 'before',
            widget: 'dxSelectBox',
            options: {
                width: 200,
                items: [{
                    value: 'CustomerStoreState',
                    text: 'Grouping by State'
                }, {
                    value: 'Employee',
                    text: 'Grouping by Employee'
                }],
                displayExpr: 'text',
                valueExpr: 'value',
                value: 'CustomerStoreState',
                //onValueChanged: this.groupChanged.bind(this)
            }
    },
    {
      location: 'before',
      locateInMenu: 'never',
      template: () => {
          return '<dx-text-box placeholder="Subject here..."></dx-text-box>';
      }
    }
    ,{
          location: 'before',
          locateInMenu: 'never',
          template: () => {
              return '<input type="file" (change)="onFileChange($event)" name="file" id="file" class="inputfile" multiple /><label for="file"> <i class="icon dx-icon-download"></i> Choose a file(s)</label>';
          }
      }
*/
        );
  }

  formatUpload(value) {
      return 'Uploading: ' + value * 100 + '%';
  }
  formatEncrypt(value) {
    return 'Encrypting: ' + value * 100 + '%';
  }
// TODO: combine this with the display viewer map
  fileType(rowData) {
    let type = 'svg';
    const extensions = {
        '': 'unknown',
        audio: 'audio',
        video: 'video',
        text: 'text',
        archive: 'archive',

        '.jpg': 'jpg',
        '.jpe': 'jpg',
        '.jpeg': 'jpg',
        '.jfif': 'jpg',
        '.png': 'png',
        '.gif': 'gif',
        '.tiff': 'tiff',
        '.svg': 'svg',
        '.psd': 'psd',
        '.ai': 'ai',
        '.dwg': 'dwg',

        '.iso': 'iso',
        '.mdf': 'mdf',
        '.nrg': 'nrg',

        '.zip': 'zip',
        '.7z': '7z',
        '.7zip': '7z',
        '.arj': 'arj',
        '.rar': 'rar',
        '.gz': 'archive',
        '.gzip': 'archive',
        '.bz2': 'archive',
        '.bzip2': 'archive',
        '.tar': 'archive',

        '.xls': 'xls',
        '.doc': 'doc',
        '.pdf': 'pdf',
        '.ppt': 'ppt',
        '.rtf': 'rtf',
        '.txt': 'txt',
        '.md': 'text',
        '.markdown': 'text',

        '.avi': 'avi',
        '.mp2': 'mp2',
        '.mp3': 'mp3',
        '.mp4': 'mp4',
        '.fla': 'fla',
        '.mxf': 'mxf',
        '.wav': 'wav',
        '.wma': 'wma',
        '.aac': 'aac',
        '.flac': 'flac',

        '.css': 'css',
        '.csv': 'csv',
        '.html': 'html',
        '.json': 'json',
        '.js': 'js',
        '.xml': 'xml',

        '.dbf': 'dbf',
        '.exe': 'exe'
    };
    const unknown = extensions[''];
    // Extract extension from the filename
    const ext = (typeof rowData.name === 'string') || (Object.prototype.toString.call(rowData.name) === '[object String]') ? '.' + rowData.name.split('.').pop(-1).toLowerCase() : '';
    if (type.charAt(0) === '.') {
    type = type.substr(1, type.length);
    }
    if (['svg'].indexOf(type) >= 0) {
    type = '.' + type;
    } else {
    type = '';
    }
    return '/assets/svg/file/' + (extensions[ext] || unknown) + type;
  }

/*
TODO:// This may come in handy for addeding the size of the payload struct and messages.
[calculateCustomSummary]="calculateSummary"
        <dxi-total-item
    name="сustomSummary1"
    summaryType="custom"
    displayFormat="Size: {0}"
    showInColumn="name"
    valueFormat="currency"
    >
    </dxi-total-item>

  calculateSummary(options) {
    if (options.name == "сustomSummary1") {
      if (options.summaryProcess == "start") {
        options.totalValue = 0;
      } else if (options.summaryProcess === "calculate") {
        options.totalValue = options.totalValue + options.value.SaleAmount;
      }
    }
  }
  */

  formatSize(rowData) {
// This is ugly find a better way to deal with this.
    let bytes = 0;
    if (rowData.size) {
       bytes = parseInt(rowData.size, 10);
    } else {
       bytes = parseInt(rowData, 10);
    }

    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) { return '0 B'; }
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, i)).toFixed(2)  + ' ' + sizes[i];
  }

}
