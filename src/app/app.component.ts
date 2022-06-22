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
  icon = {
    faShoppingCart: faShoppingCart,
    faBuilding: faBuilding,
    faInfoCircle: faInfoCircle,
    faAddressBook: faAddressBook,
    faUser: faUser,
  };

  isLogin: boolean = false; //初始設定為未登入
  loadFeature: string = 'home'; //初始頁面為'home'
  shoppingCart: Product[] = []; //購物車內容
  badgeCount: number = 0; //購物數量

  constructor() {}

  //選擇功能頁面
  onSelected(feature: string) {
    this.loadFeature = feature;
  }

  //從子元件取得商品資料，將資料加入至shoppingCart
  getProduct(shoppingCart: Product) {
    let product = this.shoppingCart.find(
      (e) => e.selfPk === shoppingCart.selfPk
    );
    //商品重複添加？增加totalCount：push至shoppingCart
    if (product) {
      product.totalCount += shoppingCart.count;
    } else {
      this.shoppingCart.push(shoppingCart);
      this.shoppingCart.find(
        (e) => e.selfPk === shoppingCart.selfPk
      ).totalCount += shoppingCart.count;
    }
    this.getBadgeCount();
  }

  //取得購物數量
  getBadgeCount() {
    this.badgeCount = 0;
    this.shoppingCart.forEach((e) => {
      this.badgeCount += e.totalCount;
    });
  }

  //從子元件取得購物車所有資料
  getShoppingCart(shoppingCart: Product[]) {
    this.shoppingCart = shoppingCart;
    this.getBadgeCount();
  }
}
