import { Component, Input } from '@angular/core';
import { CompareFeatures } from '@compare/types';

@Component({
  selector: 'compare-panels',
  templateUrl: './compare-panels.component.html',
  styleUrls: ['./compare-panels.component.scss']
})
export class ComparePanelsComponent {
  @Input() compareFeatures: CompareFeatures;
  @Input() header: string;
  @Input() conditionalIcons: boolean;
}
