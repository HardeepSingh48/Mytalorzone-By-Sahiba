import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiService: ApiService) { }

  // Get all products
  getAllProducts(): Observable<any> {
    return this.apiService.get('get-product'); // API route to get all products
  }

  // Get product by ID
  getProductById(id: string): Observable<any> {
    return this.apiService.get(`product/${id}`); // API route to get product by productId
  }

  // Get products by category
  getProductsByCategory(category: string): Observable<any> {
    return this.apiService.post('product/category', { category }); // API route for getting products by category
  }

  // Create new product
  createProduct(productData: any): Observable<any> {
    return this.apiService.post('create-product', productData); // API route for creating new product
  }

  // Update product visibility
  updateProductVisibility(productId: string, visibility: boolean): Observable<any> {
    return this.apiService.put('update-visibility', { productId, visibility }); // API route to update product visibility
  }

  // Update stock status
  updateStockStatus(productId: string, stockData: any): Observable<any> {
    return this.apiService.put('instock-update', { productId, ...stockData }); // API route to update stock status
  }
}
