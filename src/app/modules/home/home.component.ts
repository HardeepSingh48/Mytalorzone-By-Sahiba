import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { HttpClientModule } from '@angular/common/http';  
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/cart/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductService,private cartService: CartService) { }

  ngOnInit(): void {
    console.log('Fetching products...');
    this.productService.getAllProducts().subscribe((response: any) => {
      
      this.products = response.products;  
    });
  }

  addToCart() {
    this.cartService.incrementCartCount();
  }
  
}
