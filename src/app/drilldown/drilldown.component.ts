import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

/**
 * This component loads hierarchical structure data the drill-down navigation way
 */
@Component({
  selector: 'drilldown',
  templateUrl: './drilldown.component.html',
  styleUrls: ['./drilldown.component.scss']
})
export class DrillDownComponent implements OnChanges {

  /**
   * the hierachical structure data of the navigation
   */
  @Input('data')
  public data: any[];

  /**
   * the node that is currently displayed
   */
  public currentNode: any;

  /**
   * indicates the path to the current node
   * @type {Array}
   */
  public breadcrumb = [];

  constructor() {
  }

  /**
   * sets the currentNode value on data loading
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {

    if (changes['data'].currentValue != changes['data'].previousValue) {

      this.currentNode = {children: this.data};
    }
  }

  /**
   * loads the specified node, increments breadcrumb array
   * @param node
   */
  loadChildNode(node: any) {

    if (node.children.length > 0) {

      node.parentNode = this.currentNode;

      this.currentNode = node;

      this.breadcrumb.push(node);
    }
  }

  /**
   * loads parent node
   * @param node
   */
  loadParentNode(node: any) {

    this.currentNode = node;

    this.breadcrumb.pop();
  }
}
