export interface Item {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

// Mock items for testing
export const ITEMS: Item[] = [
  { id: 1, name: 'Cucumber', quantity: 3, price: 1.5 },
  { id: 2, name: 'Chili sauce', quantity: 2, price: 3.3 },
  { id: 3, name: 'Hammer', quantity: 1, price: 6.3 },
];
