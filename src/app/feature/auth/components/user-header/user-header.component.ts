import { Component } from '@angular/core';

import { ProfileImageUploadComponent } from '@auth/components/profile-image-upload/profile-image-upload.component';
import { AuthUserActions } from '@auth/actions';

import { AuthSelectors } from '@shared/state/auth/selectors';
import { WebDevUtilsState } from '@shared/state/index';
import { DialogService } from '@shared/dialog/services/dialog.service';
import { takeOne } from '@shared/operators';

import { Store } from '@ngrx/store';

import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent {
  uid$: Observable<string> = this.store.select(AuthSelectors.selectUid);
  displayName$: Observable<string> = this.store.select(AuthSelectors.selectDisplayName);
  email$: Observable<string> = this.store.select(AuthSelectors.selectEmail);
  photoUrl$: Observable<string> = this.store.select(AuthSelectors.selectPhotoUrl);

  constructor(
    private store: Store<WebDevUtilsState>,
    private dialogService: DialogService
  ) { }

  uploadProfileImage() {
    combineLatest([
      this.store.select(AuthSelectors.selectUid),
      this.dialogService.openDialog({
        title: 'Add Profile Image',
        type: 'general',
        component: ProfileImageUploadComponent
      })
    ])
      .pipe(takeOne())
      .subscribe(([uid, file]) => {
        this.store.dispatch(AuthUserActions.uploadPhotoURL(
          `profile-images/${uid}-${file.name.replace(/[^A-Za-z0-9]/g, '')}`,
          file
        ));
      });
  }
}
