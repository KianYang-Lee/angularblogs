import { Component } from '@angular/core';
import { ITEMS, Item } from '../types/item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  items = ITEMS;
  cartName: string = 'Shopping Cart A';

  addItem(item: Item) {
    this.items = [...this.items, item];
  }
}
