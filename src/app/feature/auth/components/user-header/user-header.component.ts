import { Component, OnInit } from '@angular/core';

import { ProfileImageUploadComponent } from '@auth/components/profile-image-upload/profile-image-upload.component';
import { AuthUserActions } from '@auth/actions';

import { AuthSelectors } from '@shared/state/auth/selectors';
import { WebDevUtilsState } from '@shared/state/index';
import { DialogService } from '@shared/dialog/services/dialog.service';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {
  displayName$: Observable<string> = this.store.select(AuthSelectors.selectDisplayName);
  email$: Observable<string> = this.store.select(AuthSelectors.selectEmail);
  photoUrl$: Observable<string> = this.store.select(AuthSelectors.selectPhotoUrl);

  constructor(
    private store: Store<WebDevUtilsState>,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void { }

  uploadProfileImage() {
    this.dialogService.openDialog({
      title: 'Add Profile Image',
      type: 'general',
      component: ProfileImageUploadComponent
    })
      .pipe(takeWhile((selectedImage: File | null) => selectedImage != null))
      .subscribe((selectedImage: File) => {
        this.store.dispatch(AuthUserActions.uploadPhotoURL(
          `profile-images/${sessionStorage.getItem('uid')}-${selectedImage.name}`,
          selectedImage
        ));
      });
  }
}
