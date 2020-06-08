import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor(private afStorage: AngularFireStorage) { }

  upload = (path: string, file: File): Observable<any> => from(this.afStorage.upload(path, file));

  retrieveDownloadURL = (storageRef: string): Observable<string> =>
    from(this.afStorage.ref(storageRef).getDownloadURL());
}
