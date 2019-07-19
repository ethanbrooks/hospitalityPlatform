import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpResponse, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BodyInterceptor implements HttpInterceptor {

  private modifyBody(body: any) {
//    console.log(body);
   return body;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//    console.log(request.url);
    if (request.url.indexOf('/mock/message') === -1) {
    /*
      request = request.clone({
        setHeaders: {
          "X-Content-Security-Policy": "script-src 'none' ; style-src 'self' ; img-src 'self' data: ; font-src 'self' data: ; connect-src 'none' ; media-src 'none' ; object-src 'none' ; child-src 'none' ; frame-src 'none' ; worker-src 'none' ; frame-ancestors 'none' ; form-action 'none' ; upgrade-insecure-requests; block-all-mixed-content; disown-opener; sandbox; reflected-xss block; base-uri /; manifest-src 'none' ; referrer no-referrer;"
        }
      });
    */
      return next.handle(request).pipe(map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
            return event.clone({ body: this.modifyBody(event.body) });
        }
        return event;
      }, error => {
      //  this.modifyError(error);
      // tslint:disable-next-line deprecation
        return of(error);
      }));

    } else {
      return next.handle(request);
    }
  }
}
