import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeStyle, SafeHtml } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    console.log(value);
    value = this.sanitized.bypassSecurityTrustHtml(value)
//    value = this.sanitized.bypassSecurityTrustStyle(value)
    return value;
  }
}