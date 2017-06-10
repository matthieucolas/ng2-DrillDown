import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ng2-drilldown',
  templateUrl: './ng2-drilldown.component.html',
  styleUrls: ['./ng2-drilldown.component.css']
})
export class Ng2DrillDownComponent implements OnChanges {

  @Input('data')
  public data: any[];

  public currentNode: any;

  public breadcrumb = [];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['data'].currentValue != changes['data'].previousValue) {

      this.currentNode = {children: this.data};
    }
  }

  loadChildNode(node: any) {

    node.parentNode = this.currentNode;

    this.currentNode = node;

    this.breadcrumb.push(node);
  }

  loadParentNode(node: any) {

    this.currentNode = node;

    this.breadcrumb.pop();
  }
}
