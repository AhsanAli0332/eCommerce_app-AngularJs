import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartCounter: any;
  len!: number;

  myFunction() {
    let x = document.getElementById("myTopnav");
    if (x!.className === "topnav") {
      x!.className += " responsive";
    }else {
      x!.className = "topnav";
    }
  }
  
  constructor( private cartCount: CartService) {
  }
  ngOnInit(): void {
    this.cartCounter = this.cartCount.itemsCounter;
  }
 }