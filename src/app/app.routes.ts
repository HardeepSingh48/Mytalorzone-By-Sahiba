
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ProductListComponent } from './modules/product-list/product-list.component';
import { ProductDetailComponent } from './modules/product-detail/product-detail.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { LoginComponent } from './core/features/login/login.component';
import { SignupComponent } from './core/features/signup/signup.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    { path: 'products', component: ProductListComponent },
    // { path: 'products/:id', component: ProductDetailComponent },
    { path: 'cart', component: CartComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    
];
