import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost:5000'; // Adjusted to match your backend base URL
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  items$ = this.cartItemsSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Getter for the current cart items
  get items(): any[] {
    return this.cartItemsSubject.value;
  }

  // Initialize the cart by fetching items from the backend
  init(userId: string): void {
    this.getCartItems(userId).subscribe((items) => {
      this.cartItemsSubject.next(items);
    });
  }

  // Fetch cart items for a specific user
  getCartItems(userId: string): Observable<any[]> {
    return this.http.post<any>(`${this.apiUrl}/get-cart`, { userId }).pipe(
      map((response) => response.cart?.productsInCart || []), // Adjust to match the backend response
      tap((items) => this.cartItemsSubject.next(items))
    );
  }

  // Add an item to the cart
  addToCart(userId: string, productId: string, quantity: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/addtocart`, { userId, productId, quantity }).pipe(
      tap(() => this.init(userId))
    );
  }

  // Remove an item from the cart
  removeFromCart(userId: string, productId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/delete-items`, { userId, productId }).pipe(
      tap(() => this.init(userId))
    );
  }

  // Clear the cart (Optional if implemented on the backend)
  clearCart(userId: string): Observable<any> {
    // Add a backend endpoint for clearing the cart if needed
    return this.http.post<any>(`${this.apiUrl}/clear-cart`, { userId }).pipe(
      tap(() => this.cartItemsSubject.next([]))
    );
  }


  private cartItemCount = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemCount.asObservable();

  incrementCartCount() {
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
}
