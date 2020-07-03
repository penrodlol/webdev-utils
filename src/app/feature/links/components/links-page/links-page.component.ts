import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LinksService } from '@links/services/links.service';

@Component({
  selector: 'app-links-page',
  templateUrl: './links-page.component.html',
  styleUrls: ['./links-page.component.scss']
})
export class LinksPageComponent implements OnInit {
  visible$: Observable<any | unknown> = this.linksService.visible();

  constructor(
    private linksService: LinksService
  ) { }

  ngOnInit(): void { }

}
