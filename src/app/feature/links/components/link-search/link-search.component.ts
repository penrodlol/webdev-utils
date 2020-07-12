import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { LinksService } from '@links/services/links.service';

@Component({
  selector: 'link-search',
  templateUrl: './link-search.component.html',
  styleUrls: ['./link-search.component.scss']
})
export class LinkSearchComponent implements OnInit {
  linkSearchForm: FormGroup = this.fb.group({ name: null });

  isSearching = false;

  constructor(
    private fb: FormBuilder,
    private linksService: LinksService
  ) { }

  ngOnInit(): void {
  }

  toggleSearch = (status: boolean) => this.isSearching = status;

}
