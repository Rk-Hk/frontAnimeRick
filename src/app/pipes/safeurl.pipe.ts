import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeurl'
})
export class SafeurlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    console.log("URL : ", url);
    
    let urltemp = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    console.log("URLTEMP : ", urltemp);
    
    return urltemp
  }

}
