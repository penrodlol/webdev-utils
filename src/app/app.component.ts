import { Component } from '@angular/core';
import { WebDevUtilsRoutes } from './routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webdev-utils';
  routes = WebDevUtilsRoutes;
}
