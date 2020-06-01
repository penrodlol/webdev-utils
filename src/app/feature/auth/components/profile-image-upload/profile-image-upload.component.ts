import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/components/dialog/dialog.component';

@Component({
  selector: 'app-profile-image-upload',
  templateUrl: './profile-image-upload.component.html',
  styleUrls: ['./profile-image-upload.component.scss']
})
export class ProfileImageUploadComponent implements OnInit {
  profileImagePreview: string;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>
  ) { }

  ngOnInit(): void {
  }

  uploadProfileImage(fileList: FileList) {
    const imageName = fileList[0].name;
    this.dialogRef.close(imageName);
  }

}
