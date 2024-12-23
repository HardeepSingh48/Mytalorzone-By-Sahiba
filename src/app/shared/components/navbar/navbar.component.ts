import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../core/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [RouterModule,CommonModule],
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  isSearchOpen = false;
  cartItemCount = 0;


  constructor(private cartService: CartService) {}
  
  navigationItems = [
    { label: 'Home', path: '/', exact: true },
    { label: 'New Arrivals', path: '/new-arrivals', exact: false },
    { label: 'Traditional', path: '/traditional', exact: false },
    { label: 'Western', path: '/western', exact: false },
    { label: 'Collections', path: '/collections', exact: false },
    { label: 'Sale', path: '/sale', exact: false },
    { label: 'About Us', path: '/about', exact: true },
    { label: 'Contact', path: '/contact', exact: true },
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  ngOnInit() {
    this.cartService.cartItemCount$.subscribe(
      (count) => (this.cartItemCount = count)
    );
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      this.isSearchOpen = false;
    }
  }

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    if (this.isSearchOpen) {
      this.isMobileMenuOpen = false;
    }
  }
}
