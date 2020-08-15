import { Component, Input, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { ArrayDataSource } from '@angular/cdk/collections';

import { IJsonPrettyTreeNode } from '@json-pretty/models/json-pretty-tree-node.interface';
import { JsonPrettyService } from '@json-pretty/services/json-pretty.service';
import { Store } from '@ngrx/store';
import { IJsonPrettyState } from '@json-pretty/state/json-pretty.state';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { JsonPrettySelectors } from '@json-pretty/state/selectors';

@UntilDestroy()
@Component({
  selector: 'json-pretty-tree',
  templateUrl: './json-pretty-tree.component.html',
  styleUrls: ['./json-pretty-tree.component.scss']
})
export class JsonPrettyTreeComponent implements OnInit {
  treeControl: NestedTreeControl<IJsonPrettyTreeNode>;
  dataSource: ArrayDataSource<IJsonPrettyTreeNode>;

  constructor(
    private store: Store<IJsonPrettyState>
  ) { }

  ngOnInit(): void {
    this.store
      .select(JsonPrettySelectors.selectJson)
      .pipe(untilDestroyed(this))
      .subscribe((json: IJsonPrettyTreeNode[]) => {
        this.treeControl = new NestedTreeControl<IJsonPrettyTreeNode> (node => node.children);
        this.dataSource = new ArrayDataSource(json);
      });
  }

  hasChild = (_: number, node: IJsonPrettyTreeNode) => !!node.children && node.children.length > 0;
}
