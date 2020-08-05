import { Component, Input } from '@angular/core';
import { CompareFeatures } from '@compare/types';

@Component({
  selector: 'compare-table',
  templateUrl: './compare-table.component.html',
  styleUrls: ['./compare-table.component.scss']
})
export class CompareTableComponent {
  @Input() dataSource: CompareFeatures;

  dataColumns = ['info', 'with', 'without'];
}
