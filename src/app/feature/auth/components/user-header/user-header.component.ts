import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthSelectors } from 'src/app/shared/state/auth/selectors';
import { WebDevUtilsState } from 'src/app/shared/state';
import { DialogService } from 'src/app/shared/dialog/services/dialog.service';
import { ProfileImageUploadComponent } from '../profile-image-upload/profile-image-upload.component';
import { AuthUserActions } from '@feature/auth/actions';
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
      component: ProfileImageUploadComponent
    })
      .pipe(takeWhile((selectedImage: File | null) => selectedImage != null))
      .subscribe((selectedImage: File) => {
        this.store.select(AuthSelectors.selectUID).subscribe(uid => {
          this.store.dispatch(AuthUserActions.uploadPhotoURL(
            `profile-images/${uid}-${selectedImage.name}`,
            selectedImage
          ));
        });
      });
  }
}
