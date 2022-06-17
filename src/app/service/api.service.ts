import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  host = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  //取得所有產品資料
  getProduct() {
    let url = this.host + '/product';
    return this.http.get(url);
  }
}
