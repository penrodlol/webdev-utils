import { Component, Input } from '@angular/core';

const DEFAULT_DIAMETER = 45;
const DEFAULT_MARGIN = 0;

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @Input() diameter = DEFAULT_DIAMETER;
  @Input() top = DEFAULT_MARGIN;
  @Input() right = DEFAULT_MARGIN;
  @Input() bottom = DEFAULT_MARGIN;
  @Input() left = DEFAULT_MARGIN;
}
