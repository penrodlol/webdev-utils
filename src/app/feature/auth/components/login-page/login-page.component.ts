import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    const googleSvgUrl = 'https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg';
    this.matIconRegistry.addSvgIcon('google-logo', this.domSanitizer.bypassSecurityTrustResourceUrl(googleSvgUrl));
  }

  ngOnInit(): void { }
}
