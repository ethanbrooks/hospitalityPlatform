import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';

import CustomStore from 'devextreme/data/custom_store';

import { AuthenticationService } from '../_services/authentication.service';
import { MessageDetail } from '../_models/message';

@Injectable()
export class EncryptoService {
    messageStore: CustomStore;
    currentAuthentication: any;
    private messageDataSubject = new ReplaySubject<MessageDetail>(1);
    messageData$: Observable<MessageDetail> = this.messageDataSubject.asObservable();
    messageId: string;

    constructor(
        private httpClient: HttpClient,
        private authenticationService: AuthenticationService,
        private sanitizer: DomSanitizer
        ) {
        const currentAuthentication = this.authenticationService.currentAuthentication;

        this.messageStore = new CustomStore({
            key: [ 'id', 'mailbox' ],
            errorHandler: (error) => {
                console.log(error.message);
            },
            remove: (loadOptions: any) => {
                const params: HttpParams = new HttpParams();
                return httpClient.delete('/api/users/' + this.authenticationService.currentAuthentication.id + '/mailboxes/' + loadOptions.mailbox + '/messages/' + loadOptions.id,
                {
                    params,
                })
                .toPromise();
            },
            insert: (loadOptions: any) => {
                return httpClient.post('/api/users/' + currentAuthentication.id + '/mailboxes/' + loadOptions.userData.mailbox + '/messages',
                loadOptions.data)
                .toPromise();
            },
            load: (loadOptions: any) => {
                const userData = {
                    query: {
                        limit: 200,
                        searchable: false
                    }
                };
// This is needed for remote operations
                let params: HttpParams = new HttpParams();
                [
/*
                    "skip",
                    "take",
                    "requireTotalCount",
                    "requireGroupCount",
                    "sort",
                    "filter",
                    "totalSummary",
                    "group",
                    "groupSummary",
*/
 /*                   "mailbox",// optional	StringID of the Mailbox
                    "thread",//  optional	String Thread ID
                    "query",//  optional	String Search string, uses MongoDB fulltext index. Covers data from mesage body and also common headers like from, to, subject etc.
                    "datestart",//  optional	String	Datestring for the earliest message storing time
                    "dateend",//  optional	String	Datestring for the latest message storing time
                    "from",//  optional	String Partial match for the From: header line
                    "to",//  optional	String Partial match for the To: and Cc: header lines
                    "subject",//  optional	String	Partial match for the Subject: header line
                    "attachments",//  optional	Boolean	If true, then matches only messages with attachments
                    "flagged",//  optional	Boolean	If true, then matches only messages with \Flagged flags
                    "searchable",// If true, then matches messages not in Junk or Trash
                    "page",// optional	Number	Current page number. Informational only, page numbers start from 1Default value: 1
                    "next",// optional	Number	Cursor value for next page, retrieved from nextCursor response value
                    "previous",// optional	Number	Cursor value for previous page, retrieved from previousCursor response value
*/
//                    "limit"// optional	Number	How many records to return Default value: 20
                ].forEach((i) => {
                    if (i in loadOptions.userData.query && loadOptions.userData.query[i] === '') {
                        params = params.set(i, JSON.stringify(loadOptions.userData.query[i]));
                    }
                });

                return httpClient.get('/api/users/' + currentAuthentication.id + '/search', { params})
                .toPromise()
                .then((data: any) => {
                    let messageId: number;
                    for (messageId = 0; messageId < data.results.length; messageId++) {
                        let metaData = data.results[messageId].metaData;
                        metaData = JSON.parse(metaData);
                        if (!metaData.type) {
                            metaData.type = 'message';
                        }
                        data.results[messageId].metaData = metaData;
                        let attachmentId: number;
                        for (attachmentId = 0; attachmentId < data.results[messageId].attachments.length; attachmentId++) {
                            data.results[messageId].attachments[attachmentId].messageId = data.results[messageId].id;
                            data.results[messageId].attachments[attachmentId].mailbox = data.results[messageId].mailbox;
                            data.results[messageId].attachments[attachmentId].thread = data.results[messageId].thread;
                        }
                    }
                    return {
                        data: data.results,
                        totalCount: data.total
                    };
                })
                .catch(error => { throw new Error('Data Loading Error'); });
            },
            byKey: (key: any) => {


                this.messageId = 'messageId'; // + key.id;
/*
                this.messageDataSubject.next(messageData[this.messageId].prepared = {
                    text: '<pre>Loading...</pre>',
                    html: '<h3>Loading...</h3>'
                  });
*/
                const query = {markAsSeen: true};
                let params: HttpParams = new HttpParams();
                [
                    'markAsSeen'
                ].forEach((i) => {
                    params = params.set(i, JSON.stringify(query[i]));
                });
                const localMessageUrl = '/api/users/' + this.authenticationService.currentAuthentication.id + '/mailboxes/' + key.mailbox + '/messages/' + key.id;
                return httpClient.get(localMessageUrl,
                { params })
                .toPromise()
                .then(
                    (messageData: any) => {

              // TODO: selctivly remove the Angular XSS protections using https://github.com/SwarnaKishore/angular-safe-pipe/blob/master/src/app/safe.pipe.ts
              // TODO: EMAIL: download images on the mail server via TOR on the server and attach or encode them.

              const InlineCSP = 'Content-Security-Policy: \'default-src data:; script-src \'none\'; object-src \'none\'; style-src * \'self\' data:; img-src * \'self\' data:; media-src \'none\'; frame-src \'none\'; font-src * \'self\' data:; connect-src \'none\'; report-uri /api/report\';';

              const ContentSecurityPolicy = '<meta http-equiv="Content-Security-Policy" content="Content-Security-Policy: \'default-src data:; script-src \'none\'; object-src \'none\'; style-src * \'self\' data:; img-src * \'self\' data:; media-src \'none\'; frame-src \'none\'; font-src * \'self\' data:; connect-src \'none\'; report-uri /api/report">';
              const XContentSecurityPolicy = '<meta http-equiv="X-Content-Security-Policy" content="default-src data:; script-src \'none\'; object-src \'none\'; style-src * \'self\' data:; img-src * \'self\' data:; media-src \'none\'; frame-src \'none\'; font-src * \'self\' data:; connect-src \'none\'; report-uri /api/report">';
              const XWebKitCSP = '<meta http-equiv="X-WebKit-CSP" content="default-src data:; script-src \'none\'; object-src \'none\'; style-src * \'self\' data:; img-src * \'self\' data:; media-src \'none\'; frame-src \'none\'; font-src * \'self\' data:; connect-src \'none\'; report-uri /api/report">';
// TODO: see about losen this somewhat for images, fonts and style. https://developers.google.com/web/fundamentals/security/csp/  https://www.cspisawesome.com/content_security_policies https://lab.wallarm.com/how-to-trick-csp-in-letting-you-run-whatever-you-want-73cb5ff428aa
                // Thia doesn't seem to work. in chrome.
              messageData.csp = InlineCSP;

                //  messageData.html.unshift([ContentSecurityPolicy, XContentSecurityPolicy, XWebKitCSP]);

              let  messageHtml = messageData.html.join();
              const regex = /attachment:ATT[0-9].{4}/gi;

              if (!regex.test(messageHtml)) {
                        messageData[this.messageId] = {};
                        messageData[this.messageId].prepared = {
                            text: '<pre>' + messageData.text + '</pre>',
                            html: this.sanitizer.bypassSecurityTrustHtml(messageHtml)
                        };

                        this.messageDataSubject.next(messageData);
                      } else {
// TODO: not sure why this needs to be here. Somthing about reseting it.
                        const attachments = /attachment:ATT[0-9].{4}/gi.exec(messageHtml);
                        do {
                            this.updateAttachmentUrl(this.authenticationService.currentAuthentication.id, key.mailbox, key.id, attachments[0].split(':')[1]).subscribe(
                                (imageData: any) => {
                                    messageHtml = messageHtml.replace(regex, imageData);
                                    messageData[this.messageId] = {};
                                    messageData[this.messageId].prepared = {
                                      text: '<pre>' + messageData.text + '</pre>',
                                      html: this.sanitizer.bypassSecurityTrustHtml(messageHtml)
                                    };
                                    this.messageDataSubject.next(messageData);
                                }
                            );
                            attachments.shift();
                          } while (attachments);
                      }
                  },
                  (error) => {
                    console.log(error);
                });
            }
        });
    }



  private updateAttachmentUrl(user: string, mailbox: string, message: number, attachment: string) {
    const localAttachmentUrl = '/api/users/' + user + '/mailboxes/' + mailbox + '/messages/' + message + '/attachments/' + attachment;
    return new Observable<string>((observer) => {
      const {next, error} = observer;
      this.httpClient.get(localAttachmentUrl, {responseType: 'blob'}).subscribe(response => {
        const reader = new FileReader();
        reader.readAsDataURL(response);
        reader.onloadend = () => {
          observer.next(reader.result as string);
        };
      });
      return {unsubscribe() {  }};
    });
  }
}
