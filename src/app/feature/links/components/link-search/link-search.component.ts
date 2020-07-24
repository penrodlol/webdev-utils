import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'link-search',
  templateUrl: './link-search.component.html',
  styleUrls: ['./link-search.component.scss']
})
export class LinkSearchComponent {
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();

  linkSearchForm: FormGroup = this.fb.group({ value: null });
  isSearching = false;

  constructor(
    private fb: FormBuilder
  ) {
    this.linkSearchForm
      .get('value')
      .valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value: string) => this.filter.emit(value?.trim().toLowerCase()));
  }

  toggleSearch(status: boolean) {
    this.isSearching = status;
    if (!this.isSearching) { this.linkSearchForm.reset(); }
  }

}
