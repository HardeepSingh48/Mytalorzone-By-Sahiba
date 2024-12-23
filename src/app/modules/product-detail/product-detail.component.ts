import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // product: any;

  product = {
    id: 1,
    name: 'Product 1',
    description: 'This is the detailed description of product 1.',
    price: 500,
    image: 'https://via.placeholder.com/300',
  };

  addToCart(product: any) {
    console.log('Added to cart:', product);
  }

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(productId).subscribe((data) => {
        this.product = data;
      });
    }
  }
}
