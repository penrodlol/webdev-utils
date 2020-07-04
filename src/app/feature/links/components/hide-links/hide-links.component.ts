import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { LinksService } from '@links/services/links.service';

import { takeOne } from '@shared/operators';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { debounceTime } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'hide-links',
  templateUrl: './hide-links.component.html',
  styleUrls: ['./hide-links.component.scss']
})
export class HideLinksComponent {
  visibleForm: FormGroup = this.fb.group({
    clientSide: null,
    serverSide: null,
    misc: null
  });

  constructor(
    private fb: FormBuilder,
    private linksService: LinksService
  ) {
    this.linksService.visible().pipe(takeOne()).subscribe(visible => {
      this.visibleForm.setValue({
        clientSide: visible.clientSide,
        serverSide: visible.serverSide,
        misc: visible.misc
      }, { emitEvent: false });
    })

    this.visibleForm
      .valueChanges
      .pipe(
        debounceTime(200),
        untilDestroyed(this)
      )
      .subscribe(links => this.linksService.updateVisibleLinks(links))
  }

}
