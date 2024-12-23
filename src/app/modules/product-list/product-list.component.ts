import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description of product 1.',
      price: 500,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description of product 2.',
      price: 1000,
      image: 'https://via.placeholder.com/150',
    },
    // Add more products here...
  ];

  viewProductDetails(id: number) {
    // Navigate to product details page
    console.log('View details for product:', id);
  }
}
