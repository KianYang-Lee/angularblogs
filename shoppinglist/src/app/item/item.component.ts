import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../types/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  // Demonstrate use of lifecycle hooks
  ngOnInit() {
    console.log('#1 Component on init');
  }

  ngAfterContentInit() {
    console.log('#2 Component after content init');
  }

  ngAfterViewInit() {
    console.log('#3 Component after view init');
  }

  // Unidirectional communication from parent to child
  @Input('cartName') cartName = '';

  // Unidirectional communication from child to parent
  @Output() newItemEvent = new EventEmitter<Item>();

  addItem() {
    this.newItemEvent.emit({
      ...this.injectedItem,
      id: this.injectedItem.id + 1,
    });
    this.addedItem = true;
  }

  // Injected Item
  @Input('injectedItem') injectedItem!: Item;
  addedItem = false;
}
