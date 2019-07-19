import { Injectable, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { catchError, last, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { DxPopupComponent } from 'devextreme-angular';
import ArrayStore from 'devextreme/data/array_store';

// import * as openpgp from 'openpgp';
import { saveAs } from 'file-saver'; // https://github.com/jimmywarting/StreamSaver.js

import { AuthenticationService } from '../../_services/authentication.service';
import { UserService } from '../../_services/user.service';

@Injectable()
export class ServiceUpload  implements OnInit {
    @ViewChild('progressUploadPopup', {static: false}) progressUploadPopup: DxPopupComponent;

    @Output() httpProgress: EventEmitter<any> = new EventEmitter();
    @Output() httpMessage: EventEmitter<any> = new EventEmitter();
    @Output() httpResponse: EventEmitter<any> = new EventEmitter();


    filesArray: any = [['name', 'size', 'type', 'lastModifiedDate']];
    mailbox: string;
    payLoad: any = {
        from: {
            name: 'Service Upload',
            address: 'sender@example.com'
        },
        to: [{
            address: 'awsome_project.cool@authdomain1.com'
        }],
        subject: 'files from test upload: ',
        text: 'This is an upload of',
        unseen: false,
        metaData: '{"type":"upload"}',
        attachments: []
    };

    filesStore: ArrayStore;

    userAuthenticationData: any;
    userMailboxesData: any;
    userDetailData: any;

    constructor(
        private httpClient: HttpClient,
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        //        openpgp.initWorker({ path:'/assets/openpgp/openpgp.worker.js' });
        this.userAuthenticationData = this.authenticationService.userAuthenticationData;
        this.userDetailData = this.userService.currentUserDetail;
        this.userMailboxesData = this.userService.currentUserMailboxes;

        this.filesStore = new ArrayStore({
            key: 'name',
            data: []
        });
    }

    ngOnInit() {}

    downloadAttachment(mailbox: string, message: number, attachment: string, fileName: string) {

// TODO modify to use S3 paths.
        const localAttachmentUrl = '/api/users/' + this.userAuthenticationData.id + '/mailboxes/' + mailbox + '/messages/' + message + '/attachments/' + attachment;
        this.httpClient.get(localAttachmentUrl, { responseType: 'blob'}).subscribe(response => {
            const file = new File([response], fileName, {type: response.type});
            saveAs(file);
            },
            (error) => {
                console.log('http error: ', error);
            }
        );
    }

    async appendQueue(files: FileList) {
        this.filesArray = Array.from(files);
        for (const file of this.filesArray) {
            try {
                this.filesStore.push([{ type: 'insert', data: file }]);
                const attachment = await this.encodeAsync(file);
                this.payLoad.attachments.push(attachment);
            } catch (err) {
                console.log('error: ', err);
            }
        }
    }

    async upload(payLoad) {
        const newPayload = Object.assign(this.payLoad, payLoad);

        const mailbox: string = this.userMailboxesData.results.filter(mailbox => mailbox.name === 'INBOX')[0].id;
        const url: string = '/api/users/' + this.authenticationService.currentUserValue.id + '/mailboxes/' + mailbox + '/messages';

        return this.httpClient.post(url, newPayload, {observe: 'events' })
            .pipe(
                map(
                    event => this.getEventMessage(event, newPayload.attachments),
                    data => data
                ),
                tap(httpProgress => this.httpProgress.emit(httpProgress)),
                last(),
                catchError(this.uploadError)
            ).subscribe(
                httpMessage => {
                    this.httpMessage.emit(httpMessage);
                    console.log('httpMessage:  ', httpMessage);
                },
                httpResponse => {
                    this.httpResponse.emit(httpResponse);
                    console.log('httpResponse:  ', httpResponse);
                }
            );
    }

    encodeAsync(file: File) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
/*
                let options: any;
                options = {
                    //message: openpgp.message.fromText(reader.result as string),
                    message: openpgp.message.fromBinary(new Uint8Array(reader.result as ArrayBuffer)),
                    passwords: ['secret stuff'],
                    armor: true
                };
                openpgp.encrypt(options).then(function(ciphertext) {
 */
                    const payLoad = {
                        filename: file.name,
                        // content: ciphertext,
                        content: reader.result.toString().split(',')[1],
                        contentType: file.type
                    };
//                }).then(function(payLoad) {  //<Message>
                    resolve(payLoad);
//                });
            };
            reader.onerror = reject;
//            reader.readAsArrayBuffer ( file );
            reader.readAsDataURL ( file );
        });
    }

    private getEventMessage(event: HttpEvent<any>, files) {
        switch (event.type) {
            case HttpEventType.Sent:
                return `Uploading file "${files[0].filename}".`;
            case HttpEventType.DownloadProgress:
                const loaded = Math.round(event.loaded / 1024);
                return `Downloading ${ loaded } kb downloaded`;

            case HttpEventType.UploadProgress:
                // Compute and show the % done:
                const percentDone = Math.round(100 * event.loaded / event.total);
                return `File "${files[0].filename}" is ${percentDone}% uploaded.`;

            case HttpEventType.Response:
//                this.progressUploadPopup.visible = !this.progressUploadPopup.visible;
                return `File "${files[0].filename}" was completely uploaded!`;

            default:
                return `File "${files[0].filename}" surprising upload event: ${event.type}.`;
        }
    }

    private uploadError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(`Error ${error.statusText} occoured with ${error.status} code.`);
    }
}
