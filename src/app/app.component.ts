import { Component } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLogin: boolean = false;
  faShoppingCart = faShoppingCart;
  faBuilding = faBuilding;
  faInfoCircle = faInfoCircle;
  faAddressBook = faAddressBook;
  faUser = faUser;
}
