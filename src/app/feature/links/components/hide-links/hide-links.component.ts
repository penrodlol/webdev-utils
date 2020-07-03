import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { LinksService } from '@links/services/links.service';
import { takeOne } from '@shared/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'hide-links',
  templateUrl: './hide-links.component.html',
  styleUrls: ['./hide-links.component.scss']
})
export class HideLinksComponent implements OnInit {
  visible$: Observable<any | unknown> = this.linksService.visible();

  visibleForm: FormGroup = this.fb.group({
    clientSide: null,
    serverSide: null,
    misc: null
  });

  constructor(
    private fb: FormBuilder,
    private linksService: LinksService
  ) { }

  ngOnInit(): void {
    this.visible$.pipe(takeOne()).subscribe(visible => {
      this.visibleForm.setValue({
        clientSide: visible.clientSide,
        serverSide: visible.serverSide,
        misc: visible.misc
      })
    });

    this.visibleForm
      .valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(console.log)
  }

}
