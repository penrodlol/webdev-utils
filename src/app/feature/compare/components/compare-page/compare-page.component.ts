import { Component } from '@angular/core';

import { WebDevUtilsRoutes } from '@routes/routes';

import { CompareFeatures } from '@compare/types';

@Component({
  selector: 'app-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.scss']
})
export class ComparePageComponent {
   compareFeatures: CompareFeatures = WebDevUtilsRoutes
    .filter(route => route.info)
    .map(route => ({ info: route.info, auth: route.auth }));
}
