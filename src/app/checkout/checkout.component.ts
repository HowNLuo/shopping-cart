import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  @Input() shoppingCart: Product[] = []; //從app.component取得shoppingCart資料
  @Output() updatedShoppingCart = new EventEmitter<Product[]>(); //傳送更新後的購物車資料
  totalCount = 0;
  totalAmount = 0;

  icon = { faTimes: faTimes };
  constructor() {}

  ngOnInit(): void {
    this.calculateTotalAmount();
    this.calculateTotalCount();
  }

  deleteItem(selfPk: number) {
    this.shoppingCart = this.shoppingCart.filter((e) => e.selfPk !== selfPk);
    this.calculateTotalAmount();
    this.calculateTotalCount();
    this.updatedShoppingCart.emit(this.shoppingCart);
  }

  //確認數字是否小於0、大於999、為小數點。
  checkCount(selfPk: number, totalCount) {
    if (totalCount < 1 || totalCount >= 1000) {
      this.shoppingCart[selfPk - 1].totalCount = 1;
    } else if (totalCount.toString().includes('.')) {
      this.shoppingCart[selfPk - 1].totalCount = Math.floor(totalCount);
    }
    this.calculateTotalAmount();
    this.calculateTotalCount();
    this.updatedShoppingCart.emit(this.shoppingCart);
  }

  countMinus() {
    this.calculateTotalAmount();
    this.calculateTotalCount();
    this.updatedShoppingCart.emit(this.shoppingCart);
  }
  countPlus() {
    this.calculateTotalAmount();
    this.calculateTotalCount();
    this.updatedShoppingCart.emit(this.shoppingCart);
  }
  calculateTotalCount() {
    this.totalCount = 0;
    this.shoppingCart.forEach((e) => {
      this.totalCount += e.totalCount;
    });
  }
  calculateTotalAmount() {
    this.totalAmount = 0;
    this.shoppingCart.forEach((e) => {
      this.totalAmount += e.totalCount * e.price;
    });
  }
}
