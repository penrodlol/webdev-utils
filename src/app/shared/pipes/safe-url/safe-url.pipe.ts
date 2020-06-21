import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  transform(unsafeUrl: string) {
    const safeUrl = this.sanitizer.sanitize(SecurityContext.URL, unsafeUrl);
    return this.sanitizer.bypassSecurityTrustResourceUrl(safeUrl);
  }

}
