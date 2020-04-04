import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.page.html',
  styleUrls: ['./iframe.page.scss'],
})
export class IframePage implements OnInit {
  chatbot: SafeResourceUrl;

  constructor(private domSatizer: DomSanitizer) { }

  ngOnInit() {
    this.chatbot = this.domSatizer.bypassSecurityTrustResourceUrl('https://console.dialogflow.com/api-client/demo/embedded/52903b5e-7dbd-4dec-b5e6-b5e89f72bc6a');

  }

}
