import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageRemovalService {

  removeStoreValues() {
    sessionStorage.removeItem('uid');
  }

}
