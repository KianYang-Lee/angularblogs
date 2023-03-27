import { Component, OnInit } from '@angular/core';
import { Item } from '../types/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
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

  // Component attributes and behavior to be placed here
  item: Item = {
    id: 1,
    name: 'Tomato sauce',
    quantity: 2,
    price: 2.3,
  };
}
