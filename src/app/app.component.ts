import { Component } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Product } from './model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //icon
  icon = {
    faShoppingCart: faShoppingCart,
    faBuilding: faBuilding,
    faInfoCircle: faInfoCircle,
    faAddressBook: faAddressBook,
    faUser: faUser,
  };

  isLogin: boolean = false;
  loadFeature: string;
  shoppingCartCount: number = 0;
  shoppingCart: Product[] = [];

  constructor() {}

  onSelected(feature: string) {
    this.loadFeature = feature;
  }

  getCount(count: number) {
    this.shoppingCartCount += count;
  }

  getShoppingCart(shoppingCart: Product) {
    if (this.shoppingCart.some((e) => e.selfPk === shoppingCart.selfPk)) {
      return;
    } else {
      this.shoppingCart.push(shoppingCart);
    }
  }
}
