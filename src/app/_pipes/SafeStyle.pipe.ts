import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'safeStyle'})
export class SafeStylePipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    value = this.sanitized.bypassSecurityTrustStyle(value);
    return value;
  }
}
