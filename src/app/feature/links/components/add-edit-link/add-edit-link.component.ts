import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogData } from '@shared/dialog/models/dialog.model';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-add-edit-link',
  templateUrl: './add-edit-link.component.html',
  styleUrls: ['./add-edit-link.component.scss']
})
export class AddEditLinkComponent implements OnInit {

  linkForm: FormGroup = this.fb.group({
    name: this.fb.control(this.data.sharedData?.name, Validators.required),
    url: this.fb.control(this.data.sharedData?.url, Validators.required)
  });

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
    this.linkForm
      .valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(link => {
        this.data.disabledStatus.next(link.name?.trim() && link.url?.trim() ? false : true);
        this.data.sharedData = {
          ...this.data.sharedData,
          name: link.name?.trim(),
          url: link.url?.trim()
        };
      });
  }

}
