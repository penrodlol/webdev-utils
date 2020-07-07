import { Component } from '@angular/core';

import { LinksConfigurationComponent } from '@links/components/links-configuration/links-configuration.component';

import { DialogService } from '@shared/dialog/services/dialog.service';
import { LinksService } from '@links/services/links.service';

@Component({
  selector: 'links-toolbar',
  templateUrl: './links-toolbar.component.html',
  styleUrls: ['./links-toolbar.component.scss']
})
export class LinksToolbarComponent {

  constructor(
    private dialogService: DialogService,
    private linksService: LinksService
  ) { }

  toggleLinksConfiguration() {
    this.dialogService.openDialog({
      title: 'Links Configuration',
      type: 'general',
      component: LinksConfigurationComponent,
      button1: 'Cancel',
      button2: 'Save',
    }, true).subscribe(linksConfiguration => {
      this.linksService.updateDeleteWarning(linksConfiguration.deleteWarning);
    })
  }

}
