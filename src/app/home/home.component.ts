import { Product } from './../model/product.model';
import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from '../service/api.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe((data) => {
      this.products = Object.keys(data).map((e) => {
        let products = data[e];
        return products;
      });
    });
  }

  //確認數字是否小於0、大於999、為小數點。
  checkCount(selfPk: number) {
    let count = this.products[selfPk - 1].count;
    if (count < 0 || count >= 1000) {
      this.products[selfPk - 1].count = 0;
    } else if (count.toString().includes('.')) {
      this.products[selfPk - 1].count = Math.floor(count);
    }
  }

  addToShoppingCart(selfPk: number) {
    if (this.products[selfPk - 1].count > 0) {
      alert(
        `${this.products[selfPk - 1].name} x ${
          this.products[selfPk - 1].count
        } 共 $${
          this.products[selfPk - 1].count * this.products[selfPk - 1].price
        }`
      );
    }
  }
}
