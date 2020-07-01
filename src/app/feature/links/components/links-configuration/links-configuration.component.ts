import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { DialogData } from '@shared/dialog/models/dialog.model';
import { takeOne } from '@shared/operators';

import { ILinksMeta } from '@links/models/links-meta.interface';

import { Observable } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-links-configuration',
  templateUrl: './links-configuration.component.html',
  styleUrls: ['./links-configuration.component.scss']
})
export class LinksConfigurationComponent implements OnInit {
  metaData$: Observable<ILinksMeta> = this.data.sharedData.pipe(takeOne());

  linksConfigForm: FormGroup = this.fb.group({
    newTab: this.fb.control(false),
    hidden: this.fb.group({
      clientSide: this.fb.control(false),
      serverSide: this.fb.control(false),
      misc: this.fb.control(false)
    })
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.metaData$.subscribe((metaData: ILinksMeta) => {
      this.linksConfigForm.get('newTab').setValue(metaData.newTab);
      this.linksConfigForm.get('hidden').setValue({
          clientSide: metaData.hidden.clientSide,
          serverSide: metaData.hidden.serverSide,
          misc: metaData.hidden.misc
      })
    });

    this.linksConfigForm
      .valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(metaData => this.data.sharedData = metaData);
  }

}
