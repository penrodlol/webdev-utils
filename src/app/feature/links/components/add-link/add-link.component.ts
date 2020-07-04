import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogData } from '@shared/dialog/models/dialog.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.scss']
})
export class AddLinkComponent implements OnInit {

  addLinkForm: FormGroup = this.fb.group({
    name: this.fb.control(null, Validators.required),
    url: this.fb.control(null, Validators.required)
  });

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
    this.addLinkForm
      .valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(link => {
        this.data.disabledStatus.next(link.name && link.url ? false : true);
        this.data.sharedData = link;
      })
  }

}