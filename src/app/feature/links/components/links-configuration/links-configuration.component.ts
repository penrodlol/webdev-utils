import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LinksService } from '@links/services/links.service';
import { takeOne } from '@shared/operators';
import { debounceTime } from 'rxjs/operators';
import { DialogData } from '@shared/dialog/models/dialog.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@UntilDestroy()
@Component({
  selector: 'app-links-configuration',
  templateUrl: './links-configuration.component.html',
  styleUrls: ['./links-configuration.component.scss']
})
export class LinksConfigurationComponent {
  
  linksConfigForm: FormGroup = this.fb.group({
    deleteWarning: null
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
    private linksService: LinksService
  ) {
    this.linksService.deleteWarning().pipe(takeOne()).subscribe(deleteWarning => {
      this.linksConfigForm.get('deleteWarning').setValue(deleteWarning);
    });

    this.linksConfigForm
      .valueChanges
      .pipe(
        debounceTime(200),
        untilDestroyed(this)
      )
      .subscribe(linksConfig => this.data.sharedData = linksConfig)
  }

}
