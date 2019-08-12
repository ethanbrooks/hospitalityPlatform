import { Component, OnDestroy, Input, ViewChild, AfterViewInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil} from 'rxjs/operators';
// import { contains } from 'ramda';
import { DxDrawerComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
// import { TimePipe } from '../../pipes/TimePipe.pipe';

import * as Dashboard from '@uppy/dashboard';
import * as StatusBar from '@uppy/status-bar';

import * as Webcam from '@uppy/webcam';
import * as AwsS3Multipart from '@uppy/aws-s3-multipart';
import * as ProgressBar from '@uppy/progress-bar';
import * as Informer from '@uppy/informer';
import * as Form from '@uppy/form';
import * as ThumbnailGenerator from '@uppy/thumbnail-generator';

import { UppyService } from '../../features/uppy/uppy.service';
// import { PoogleDrive } from '../../../features/uppy/plugins/num-files/src';

/*
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

import '@uppy/url/dist/style.css';
import '@uppy/drag-drop/dist/style.css';
import '@uppy/webcam/dist/style.css';
import '@uppy/file-input/dist/style.css';
import '@uppy/status-bar/dist/style.css';
import '@uppy/progress-bar/dist/style.css';
import '@uppy/informer/dist/style.css';
*/

export enum UppyPlugins {
  //  Url,
//  DragDrop,
  Webcam,
//  FileInput,
  AwsS3Multipart,
//  StatusBar,
  ProgressBar,
  Informer,
  Form,
  ThumbnailGenerator,
//  Tus,
//  XHRUpload,
//  GoldenRetriever,
//  GoogleDrive,
//  Dropbox,
//  Instagram,
}

export type UppyPluginConfigurations = [
  string,
  any
][];


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers: [ UppyService ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoComponent implements OnDestroy, AfterViewInit {
  @ViewChild(DxDrawerComponent, {static: false}) drawer: DxDrawerComponent;
  @Input() plugins: UppyPluginConfigurations = [];
  @Input() on: Subject<[string, any, any, any]>;

  uppyEvent = new Subject<[string, any, any, any]>();

  onDestroy$ = new Subject<void>();

  public constructor(
    private route: ActivatedRoute,
//    private router: Router,
//    private location: Location,
    private uppyService: UppyService,
  ) {
    this.uppyEvent.pipe(
      takeUntil(this.onDestroy$)
        // .filter(([ev]) => contains(ev, ['complete']))
    )
    .subscribe(([ev, data1, data2, data3]) =>
      console.log('Received \'' + ev + '\' event from instance 1', 'Upload complete'),
      (err) => console.dir(err),
      () => console.log('done')
    );
  }

/*
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker
              .register('/sw.js') // path to your bundled service worker with GoldenRetriever service worker
              .then((registration) => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope)
              })
              .catch((error) => {
                console.log('Registration failed with ' + error)
              })
          }
*/

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  ngAfterViewInit() {
    const Core = this.uppyService.Core;

//    const Dashboard = Dashboard;

    const instance3 = Core({
      id: 'uppy',
      autoProceed: false,
      allowMultipleUploads: true,
      debug: false,
      restrictions: {
        maxFileSize: 5000000000,
        maxNumberOfFiles: 50,
        minNumberOfFiles: 1,
        allowedFileTypes: [
          '.jpg', 'jpeg', // JPEG - Joint Photographic Experts Group
          '.gif', // GIF - Graphics Interchange Format
          '.bmp', // BMP - Windows Bitmap
          '.tiff', // TIFF - Adobe Systems
          '.png', // PNG - Portable Network Graphics
          '.svg', // SVG - Scalable Vector Graphics
          '.flv', // FLV – Flash Video
          '.asf', // ASF – Windows Media
          '.qt', // QT – Apple QuickTime
          '.mov', // MOV – Apple QuickTime
          '.mpg', // MPG – Digital Video Format
          '.mpeg', // MPEG – Digital Video Format
          '.avi', // AVI – Digital Video Format
          '.m4v', // M4V – Digital Video Format
          '.wmv', // WMV – Windows Media
          '.mp4', // MP4 – Digital Video Format
          '.3gp', // 3GP – Multimedia Mobile Format
          '.webm', //
          '.mkv', //
          '.mp3', // MP3 – Digital Audio Format
          '.wma', // WMA – Windows media audio
          '.wmv', // WMV – Windows Media,
          '.pdf' // PDF – Portable Document Format,
          ]
        },
        meta: {},
    })

    //    .use(GoldenRetriever, {serviceWorker: false})
    .use(Dashboard, {
      id: 'Dashboard',
//      plugins: ['WebCam'],
      target: '.instance3',
      replaceTargetContent: true,
      inline: true,
      metaFields: [
        { id: 'name', name: 'Name', placeholder: 'file name' },
        { id: 'license', name: 'License', placeholder: 'specify license' },
        { id: 'caption', name: 'Caption', placeholder: 'describe what the image is about' }
      ],
      trigger: '#uppy-select-files',
      width: '100%',
      height: '800',
      thumbnailWidth: 200,
//          defaultTabIcon: defaultTabIcon,
      showLinkToFileUploadResult: false,
      showProgressDetails: true,
      hideUploadButton: false,
      hideRetryButton: false,
      hidePauseResumeButton: false,
      hideCancelButton: false,
      hideProgressAfterFinish: true,
//    note: 'Upload and Encrypt',
      closeModalOnClickOutside: false,
      closeAfterFinish: false,
      disableStatusBar: true,
      disableInformer: true,
      disableThumbnailGenerator: false,
      disablePageScrollWhenModalOpen: true,
      animateOpenClose: true,
      proudlyDisplayPoweredByUppy: false,
//          onRequestCloseModal: () => this.closeModal(),
      showSelectedFiles: true,
      browserBackButtonClose: false,
      locale: {
        strings: {
          // When `inline: false`, used as the screen reader label for the button that closes the modal.
          closeModal: 'Close Modal',
          // Used as the screen reader label for the plus (+) button that shows the “Add more files” screen
          addMoreFiles: 'Add more files',
          // Used as the header for import panels, e.g., "Import from Google Drive".
          importFrom: 'Import from %{name}',
          // When `inline: false`, used as the screen reader label for the dashboard modal.
          dashboardWindowTitle: 'Uppy Dashboard Window (Press escape to close)',
          // When `inline: true`, used as the screen reader label for the dashboard area.
          dashboardTitle: 'Uppy Dashboard',
          // Shown in the Informer when a link to a file was copied to the clipboard.
          copyLinkToClipboardSuccess: 'Link copied to clipboard.',
          // Used when a link cannot be copied automatically — the user has to select the text from the
          // input element below this string.
          copyLinkToClipboardFallback: 'Copy the URL below',
          // Used as the hover title and screen reader label for buttons that copy a file link.
          copyLink: 'Copy link',
          // Used as the hover title and screen reader label for file source icons, e.g., "File source: Dropbox".
          fileSource: 'File source: %{name}',
          // Used as the label for buttons that accept and close panels (remote providers or metadata editor)
          done: 'Done',
          // Used as the screen reader label for buttons that remove a file.
          removeFile: 'Remove file',
          // Used as the screen reader label for buttons that open the metadata editor panel for a file.
          editFile: 'Edit file',
          // Shown in the panel header for the metadata editor. Rendered as "Editing image.png".
          editing: 'Editing %{file}',
          // Text for a button shown on the file preview, used to edit file metadata
          edit: 'Edit',
          // Used as the screen reader label for the button that saves metadata edits and returns to the
          // file list view.
          finishEditingFile: 'Finish editing file',
          // Used as the label for the tab button that opens the system file selection dialog.
          myDevice: 'My Device',
          // Shown in the main dashboard area when no files have been selected, and one or more
          // remote provider plugins are in use. %{browse} is replaced with a link that opens the system
          // file selection dialog.
          dropPasteImport: '', // 'Drop files here, paste, %{browse} or import from',
          // Shown in the main dashboard area when no files have been selected, and no provider
          // plugins are in use. %{browse} is replaced with a link that opens the system
          // file selection dialog.
          dropPaste: 'Drop files here, paste or %{browse}',
          // This string is clickable and opens the system file selection dialog.
          browse: 'browse',
          // Used as the hover text and screen reader label for file progress indicators when
          // they have been fully uploaded.
          uploadComplete: 'Upload complete',
          // Used as the hover text and screen reader label for the buttons to resume paused uploads.
          resumeUpload: 'Resume upload',
          // Used as the hover text and screen reader label for the buttons to pause uploads.
          pauseUpload: 'Pause upload',
          // Used as the hover text and screen reader label for the buttons to retry failed uploads.
          retryUpload: 'Retry upload',
          // Used in a title, how many files are currently selected
          xFilesSelected: {
            0: '%{smart_count} file selected',
            1: '%{smart_count} files selected'
          },
          uploading: 'Uploading',
          complete: 'Complete'
        }
      }
    })/*
    .use(GoogleDrive, {
      id: 'GoogleDrive',
      title: 'GoogleDrive',
      target: Dashboard,
      companionUrl: 'https://eq5xamyc6h.execute-api.us-east-1.amazonaws.com/dev',
      serverHeaders: {},
      locale: {
        strings: {
          // TODO
        }
      }
    })*/
    .use(StatusBar, {
      id: 'StatusBar',
      target: Dashboard,
      showProgressDetails: true,
      hideAfterFinish: false,
      hideUploadButton: false,
      hideRetryButton: false,
      hidePauseResumeButton: false,
      hideCancelButton: false,
      locale: {}
    })
    .use(ProgressBar, {
      id: 'ProgressBar',
      target: 'body',
      fixed: true,
      hideAfterFinish: true
    })
    .use(Informer, {
      id: 'Informer',
      target: Dashboard,
      replaceTargetContent: false,
      typeColors: {
        info:    { text: '#fff', bg: '#000000' },
        warning: { text: '#fff', bg: '#f6a623' },
        error:   { text: '#fff', bg: '#e74c3c' },
        success: { text: '#fff', bg: '#7ac824' }
      }
    })
    .use(Form, {
      target: '#form',
      getMetaFromForm: true,
      addResultToForm: false,
      resultName: 'uppyResult',
      triggerUploadOnSubmit: false,
      submitOnSuccess: false
    })
    .use(ThumbnailGenerator, {
      id: 'ThumbnailGenerator',
      thumbnailWidth: 200,
      thumbnailHeight: 200
    })/*
    .use(FileInput, {
      id: 'FileInput',
      target: Dashboard,
      pretty: true,
      locale: {
        strings: {
          chooseFiles: 'Choose files'
        }
      }
    })
    .use(DragDrop, {
      target: Dashboard,
      width: '100%',
//    height: '100%',
      note: null,
      locale: {
        strings: {
          // Text to show on the droppable area.
          // `%{browse}` is replaced with a link that opens the system file selection dialog.
          dropHereOr: 'Drop here or %{browse}',
          // Used as the label for the link that opens the system file selection dialog.
          browse: 'browse'
        }
      }
    })
    */
    .use(Webcam, {
      id: 'webcam',
      title: 'Camera / Video',
      target: Dashboard,
//    onBeforeSnapshot: () => Promise.resolve(),
      countdown: false,
      modes: [
        'video-audio',
        'video-only',
        'audio-only',
        'picture'
      ],
      mirror: true,
      facingMode: 'environment', // 'user', 'left', 'right',
      locale: {
        strings: {
          // Shown before a picture is taken when the `countdown` option is set.
          smile: 'Smile your pic is safe!',
          // Used as the label for the button that takes a picture.
          // This is not visibly rendered but is picked up by screen readers.
          takePicture: 'Take a picture',
          // Used as the label for the button that starts a video recording.
          // This is not visibly rendered but is picked up by screen readers.
          startRecording: 'Begin video recording',
          // Used as the label for the button that stops a video recording.
          // This is not visibly rendered but is picked up by screen readers.
          stopRecording: 'Stop video recording',
          // Title on the “allow access” screen
          allowAccessTitle: 'Please allow access to your camera',
          // Description on the “allow access” screen
          allowAccessDescription: 'In order to take pictures or record video with your camera, please allow camera access for this site.'
        }
      }
    })
/*
    .use(Url, {
      id: 'Url',
      title: 'Link',
      target: Dashboard,
      companionUrl: 'https://eq5xamyc6h.execute-api.us-east-1.amazonaws.com/dev',
//      companionUrl: 'https://wwww.safepics.com/',
      locale: {
        strings: {
          // Label for the "Import" button.
          import: 'Import',
          // Placeholder text for the URL input.
          enterUrlToImport: 'Enter URL to import a file',
          // Error message shown if Companion could not load a URL.
          failedToFetch: 'Companion failed to fetch this URL, please make sure it’s correct',
          // Error message shown if the input does not look like a URL.
          enterCorrectUrl: 'Incorrect URL: Please make sure you are entering a direct link to a file'
        }
      }
    })
    .use(Dropbox, {
      id: 'Dropbox',
      title: 'Dropbox',
      target: Dashboard,
      companionUrl: 'https://www.safepics.com/',
      companionAllowedHosts: ['demo.safepics.com' , 'www.safepics.com', 'safepics.com'],
      serverHeaders: {},
      locale: {
        strings: {
            // TODO
        }
      }
    })
*/
    .use(AwsS3Multipart, {
      limit: 4,
      companionUrl: 'https://beta.hotelherrera.com/dev',
    })
    .run();
/*
    instance3.on("complete", (data) => this.toastr.success("Received 'complete' event from instance 3", 'Upload complete'))
    instance3.on('thumbnail:generated', (fileID, preview) => {
      const img = document.createElement('img')
      img.src = preview
      img.width = 100
      document.body.appendChild(img)
    })
  */
  }

    /*
        https://localhost:3020/service/companion/connect/drive/callback
        https://localhost:3020/service/companion/connect/dropbox/callback
        https://localhost:3020/service/companion/connect/instagram/callback
        https://localhost:3020/service/companion/metrics
*/
/*
        .use(XHRUpload, {
          endpoint: '/upload.php',
          fieldName: 'my_file'
        }),
        .use(Tus, {
          resume: true,
          autoRetry: true,
          retryDelays: [0, 1000, 3000, 5000]
        })
        .use(Instagram, {
          id: 'Instagram',
          title: 'Instagram',
//          target: '.instance3',
                    companionUrl: 'https://www.safepics.com',
//          companionAllowedHosts: companionUrl,
          serverHeaders: {},
          locale: {
            strings: {
            // TODO
            }
          }
        })*/

  showRoute() {
    console.log('route.snapshot', this.route.snapshot);
    console.log('route.url', this.route.url);
    console.log(this.route.snapshot.params.id);
    notify(this.route.snapshot.params.id);
  }

}
