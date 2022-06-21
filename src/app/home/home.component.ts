import { Product } from './../model/product.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  @Output() totalCount = new EventEmitter<number>();
  @Output() shoppingCart = new EventEmitter<Product>();

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe((product) => {
      this.products = Object.keys(product).map((e) => {
        return (this.products = product[e]);
      });
    });
  }

  //確認數字是否小於0、大於999、為小數點。
  checkCount(selfPk: number) {
    let count = this.products[selfPk - 1].count;
    if (count < 1 || count >= 1000) {
      this.products[selfPk - 1].count = 1;
    } else if (count.toString().includes('.')) {
      this.products[selfPk - 1].count = Math.floor(count);
    }
  }

  addToShoppingCart(selfPk: number) {
    let product = this.products[selfPk - 1];
    alert(
      `${product.name} x ${product.count} 共 $${
        product.count * this.products[selfPk - 1].price
      }`
    );
    product.totalCount += product.count;
    this.totalCount.emit(product.count);
    this.shoppingCart.emit(product);
  }
}
