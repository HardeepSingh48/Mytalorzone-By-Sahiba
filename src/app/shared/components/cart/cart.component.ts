import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartService } from '../../../core/cart/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  totalAmount: number = 0;
  cartSrv = inject(CartService);

  // Hardcoded cart items for testing
  cartItems = [
    {
      product: {
        productName: 'Stylish T-Shirt',
        productPrice: 1200,
        discount: 10,
        productImageUrl: 'https://via.placeholder.com/100', // Placeholder image
      },
      quantity: 2,
    },
    {
      product: {
        productName: 'Classic Jeans',
        productPrice: 2200,
        discount: 15,
        productImageUrl: 'https://via.placeholder.com/100', // Placeholder image
      },
      quantity: 1,
    },
    {
      product: {
        productName: 'Leather Jacket',
        productPrice: 4500,
        discount: 5,
        productImageUrl: 'https://via.placeholder.com/100', // Placeholder image
      },
      quantity: 1,
    },
  ];

  get cartItm() {
    return this.cartSrv.items;
  }

  ngOnInit(): void {
    // this.cartSrv.init();
    const userId = 'your_user_id_here'; // Replace with logic to get the logged-in user's ID
    this.cartSrv.init(userId);
  }

  calculateTotalAmount(): number {
    const total = this.cartItems.reduce((acc, item) => {
      const discountAmount = item.product.discount
        ? (item.product.productPrice * item.product.discount) / 100
        : 0;
      const finalPrice = item.product.productPrice - discountAmount;
      return acc + finalPrice * item.quantity;
    }, 0);
    return parseFloat(total.toFixed(2));
  }

  // removeItem(product: any): void {
  //   this.cartSrv.removeFromCart(product._id).subscribe(() => {
  //     console.log('Item removed');
  //   });
  // }

  // clearCart(): void {
  //   this.cartSrv.clearCart().subscribe(() => {
  //     console.log('Cart cleared');
  //   });
  // }

  checkout(): void {
    console.log(`Total amount to be paid: $${this.calculateTotalAmount()}`);
  }

  addToCart(productId: string, quantity: number): void {
    const userId = 'your_user_id_here'; // Replace with actual user ID
    this.cartSrv.addToCart(userId, productId, quantity).subscribe();
  }

  removeFromCart(productId: string): void {
    const userId = 'your_user_id_here'; // Replace with actual user ID
    this.cartSrv.removeFromCart(userId, productId).subscribe();
  }
}
